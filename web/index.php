<?php
/**
 * Dice Roller
 *
 * 24/02/2017
 *
 */

/*
 *  Include vendor and custom classes
 */
$loader = require __DIR__ . '/../vendor/autoload.php';
$loader->add('Room', __DIR__ . '../src/Room');

/*
 * Uses
 */
use Symfony\Component\HttpFoundation\Request;
use Rpodwika\Silex\YamlConfigServiceProvider;
use Silex\Provider\FormServiceProvider;
use Silex\Provider\LocaleServiceProvider;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints as Assert;


/*
 * Create Application (Service Provider)
 */
$app = new Silex\Application();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///                                                  Environnement                                                   ///
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Configuration file
 */
$app->register(new YamlConfigServiceProvider(__DIR__ . '/settings.yml'));

/*
 * Debug Mode - To be configured in app and debug mode
 */
$app['debug'] = $app['config']['debug'];

/*
 * Timezone
 */
date_default_timezone_set('Europe/Paris');

/*
 * Base URL
 */
$app['base_url'] = $app['config']['base_url'];

/*
 * Assets
 */
$app['asset_path'] = $app['config']['asset_path'] . ':' . $app['config']['asset_port'];

/*
 * Logs
 */
$app->register(
    new Silex\Provider\MonologServiceProvider(),
    array(
        'monolog.logfile' => __DIR__ . '/../logs/development.log',
        'monolog.level' => 300, // Logger:WARNING
    )
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///                                                  Configuration                                                   ///
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Twig templates folder
 */
$app->register(
    new Silex\Provider\TwigServiceProvider(),
    array(
        'twig.path' => __DIR__ . '/../views',
    )
);

/*
 * PHP Sessions
 */
$app->register(new Silex\Provider\SessionServiceProvider());

/*
 * Mandatory provider used with forms
 */
$app->register(new LocaleServiceProvider());
$app->register(
    new Silex\Provider\TranslationServiceProvider(),
    array(
        'translator.messages' => array(),
    )
);

/*
 * Forms
 */
$app->register(new FormServiceProvider());

/*
 * Form validation
 */
$app->register(new Silex\Provider\ValidatorServiceProvider());

/*
 * URL Generation
 */
$app->register(new Silex\Provider\RoutingServiceProvider());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///                                                  Application                                                     ///
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Homepage
 */
$app->match(
    '/',
    function (Request $request) use ($app) {

        // Connect to the sqlite database
        try {
            $pdo = new PDO('sqlite:' . dirname(__FILE__) . '/../db/diceroller.sqlite');
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            $app['monolog']->error("Unable to connect SQLite : " . $e->getMessage());
            die();
        }

        // First, check if there is empty rooms to remove
        $stmt = $pdo->prepare("SELECT * FROM Rooms");
        $stmt->execute();
        $rooms = $stmt->fetchAll();
        foreach ($rooms as $room) {
            $currentTime = strtotime(date('Y-m-d'));
            $activityTime = $room['last_updated'];
            // If the room was not used for one day
            if (($currentTime - $activityTime) > 1) {
                // Remove the room and the remaining messages from the room
                try {
                    $stmt = $pdo->prepare("DELETE FROM Rooms WHERE ID = :ID");
                    $result = $stmt->execute(
                        array(
                            'ID' => $room['ID'],
                        )
                    );
                    $stmt = $pdo->prepare("DELETE FROM Messages WHERE room_name = :room_name");
                    $result = $stmt->execute(
                        array(
                            'room_name' => $room['room_name'],
                        )
                    );
                } catch (PDOException $e) {
                    $app['monolog']->error($e->getMessage());
                }
            }
        }

        // Now, create the form
        $data = array(
            'user' => 'Your name',
            'room' => 'Name of the room',
        );

        // Create the form
        $form = $app['form.factory']->createBuilder(FormType::class, $data)
            ->add('user', TextType::class)
            ->add('room', TextType::class)
            ->add('diceType', ChoiceType::class, array(
                'choices' => array('warhammer' => 'warhammer', 'starwars' => 'starwars'),
                'constraints' => new Assert\Choice(array('warhammer', 'starwars')),
                'label' => 'Game',
            ))
            ->getForm();

        $form->handleRequest($request);

        // If the form is filled, we go to the room
        if ($form->isValid()) {
            $data = $form->getData();
            $user = $app->escape($data['user']);
            $roomName = $app->escape($data['room']);
            $roomName = str_replace(' ', '_', $roomName);
            $diceType = $app->escape($data['diceType']);

            return $app->redirect($app["url_generator"]->generate("room", array('user' => $user, 'name' => $roomName, 'dice' => $diceType)));
        }

        // Fetch all the rooms to display to user
        // Connect to the sqlite database
        try {
            $pdo = new PDO('sqlite:' . dirname(__FILE__) . '/../db/diceroller.sqlite');
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            $app['monolog']->error("Unable to connect SQLite : " . $e->getMessage());
            die();
        }
        $stmt = $pdo->prepare("SELECT * FROM Rooms");
        $stmt->execute();
        $rooms = $stmt->fetchAll();
        $roomsNames = [];
        foreach ($rooms as $room) {
            $roomsNames[] = $room['room_name'];
        }

        $baseURL = $request->getBasePath();

        // Otherwise we show the form
        return $app['twig']->render('homepage.twig', array('form' => $form->createView(), 'rooms' => $roomsNames, 'baseURL' => $baseURL));
    }
)->bind('home');

/*
 * Room
 */
$app->match(
    '/room/{name}',
    function (Request $request, $name) use ($app) {
        // Get the user name
        $user = $app->escape($request->get('user'));
        // Get the dice wanted
        $dice = $app->escape($request->get('dice'));
        // Get the base URL
        $baseURL = $request->getBasePath();
        // Escape the room name
        $name = $app->escape($name);

        // Connect to the sqlite database
        try {
            $pdo = new PDO('sqlite:' . dirname(__FILE__) . '/../db/diceroller.sqlite');
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            $app['monolog']->error("Unable to connect SQLite : " . $e->getMessage());
            die();
        }

        // First, check if there is empty rooms to remove
        $stmt = $pdo->prepare("SELECT * FROM Rooms");
        $stmt->execute();
        $rooms = $stmt->fetchAll();
        foreach ($rooms as $room) {
            $currentTime = strtotime(date('Y-m-d'));
            $activityTime = $room['last_updated'];
            // If the room was not used for one day
            if (($currentTime - $activityTime) > 1) {
                // Remove the room and the remaining messages from the room
                try {
                    $stmt = $pdo->prepare("DELETE FROM Rooms WHERE ID = :ID");
                    $result = $stmt->execute(
                        array(
                            'ID' => $room['ID'],
                        )
                    );
                    $stmt = $pdo->prepare("DELETE FROM Messages WHERE room_name = :room_name");
                    $result = $stmt->execute(
                        array(
                            'room_name' => $room['room_name'],
                        )
                    );
                } catch (PDOException $e) {
                    $app['monolog']->error($e->getMessage());
                }
            }
        }

        // Fetch the right room
        $stmt = $pdo->prepare("SELECT * FROM Rooms WHERE room_name = :room_name");
        $stmt->execute(array('room_name' => $name));
        $rooms = $stmt->fetchAll();

        if (count($rooms) > 0) {
            // Add user to the room
            foreach ($rooms as $room) {
                $users = $room['room_users'];
                $dice = $room['room_dice'];
                $usersArray = explode('-', $users);
                $found = false;
                // Check if user is already registered in this room
                foreach ($usersArray as $userFound) {
                    if ($userFound == $user) {
                        $found = true;
                        continue;
                    }
                }
                // If not, we add him
                if (!$found) {
                    $stmt = $pdo->prepare("UPDATE Rooms SET room_users = :room_users WHERE room_name = :room_name");
                    $result = $stmt->execute(
                        array(
                            'room_name'  => $name,
                            'room_users' => $users . '-' . $user
                        )
                    );
                }
                // Update the timestamp of the room
                $stmt = $pdo->prepare("UPDATE Rooms SET last_updated = :last_updated WHERE room_name = :room_name");
                $result = $stmt->execute(
                    array(
                        'last_updated' => strtotime(date('Y-m-d')),
                        'room_name'    => $name
                    )
                );
            }
        } else {
            // Create the room
            $stmt = $pdo->prepare(
                "INSERT INTO Rooms (room_name, room_dice, room_users, last_updated) VALUES (:room_name, :room_dice, :room_users, :last_updated)"
            );
            $result = $stmt->execute(
                array(
                    'room_name'    => $name,
                    'room_dice'    => $dice,
                    'room_users'   => $user,
                    'last_updated' => strtotime(date('Y-m-d'))
                )
            );
        }

        $name = str_replace('_', ' ', $name);
        if ($dice == 'warhammer') {
            return $app['twig']->render(
                'wh_room.twig',
                array('user' => $user, 'room' => $name, 'baseURL' => $baseURL, 'dice' => $dice)
            );
        } elseif ($dice == 'starwars') {
            return $app['twig']->render(
                'sw_room.twig',
                array('user' => $user, 'room' => $name, 'baseURL' => $baseURL, 'dice' => $dice)
            );
        }
    }
)->bind('room');

/*
 * Push new rolls to the history of a room
 */
$app->match(
    '/push',
    function (Request $request) use ($app) {
        $roomName = $app->escape($request->request->get('room'));
        $userName = $app->escape($request->request->get('user'));
        $message = $request->request->get('html');

        // Connect to the sqlite database
        try {
            $pdo = new PDO('sqlite:' . dirname(__FILE__) . '/../db/diceroller.sqlite');
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            $app['monolog']->error("Unable to connect SQLite : " . $e->getMessage());
            die();
        }

        // Store the message
        $stmt = $pdo->prepare(
            "INSERT INTO Messages (room_name, message_readers, message_content) VALUES (:room_name, :message_readers, :message_content)"
        );
        $result = $stmt->execute(
            array(
                'room_name'       => $roomName,
                'message_readers' => $userName,
                'message_content' => $message
            )
        );

        // Update the timestamp of the room
        $stmt = $pdo->prepare("UPDATE Rooms SET last_updated = :last_updated WHERE room_name = :room_name");
        $result = $stmt->execute(
            array(
                'room_name'    => $roomName,
                'last_updated' => strtotime(date('Y-m-d'))
            )
        );

        return new Response();
    }
)->bind('push');

/*
 * Fetch the history of a room
 */
$app->match(
    '/fetch',
    function (Request $request) use ($app) {
        $roomName = $app->escape($request->request->get('room'));
        $userName = $app->escape($request->request->get('user'));
        $toSend = '';

        // Connect to the sqlite database
        try {
            $pdo = new PDO('sqlite:' . dirname(__FILE__) . '/../db/diceroller.sqlite');
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            $app['monolog']->error("Unable to connect SQLite : " . $e->getMessage());
            die();
        }

        // Fetch the messages for the room
        $stmt = $pdo->prepare("SELECT * FROM Messages WHERE room_name = :room_name");
        $stmt->execute(array('room_name' => $roomName));
        $messages = $stmt->fetchAll();

        // Check all the stored messages
        if (count($messages) > 0) {
            foreach ($messages as $message) {
                // If the user did not read the message
                $readers = explode('-', $message['message_readers']);
                if (!in_array($userName, $readers)) {
                    // Keep the message to send it back to the user
                    $toSend = '<br><div class="title">' . $readers[0] . '</div>' . $message['message_content']
                        . $toSend . '<hr>';
                    // Fetch the right room
                    try {
                        $stmt = $pdo->prepare("SELECT * FROM Rooms WHERE room_name = :room_name");
                        $stmt->execute(array('room_name' => $roomName));
                        $rooms = $stmt->fetchAll();
                    } catch (PDOException $e) {
                        $app['monolog']->error($e->getMessage());
                    }
                    foreach ($rooms as $room) {
                        $users = explode('-', $room['room_users']);
                        $readers[] = $userName;
                        $diff = array_diff($users, $readers);
                        // Everybody did not read the message, the just add the new reader
                        try {
                            $stmt =
                                $pdo->prepare(
                                    "UPDATE Messages SET message_readers = :message_readers WHERE message_content = :message_content"
                                );
                            $result2 = $stmt->execute(
                                array(
                                    'message_readers' => $message['message_readers'] . '-' . $userName,
                                    'message_content' => $message['message_content']
                                )
                            );
                        } catch (PDOException $e) {
                            $app['monolog']->error($e->getMessage());
                        }
                        if (empty($diff)) // Remove the messages read by everybody in the room
                        {
                            try {
                                $stmt = $pdo->prepare("DELETE FROM Messages WHERE ID = :ID");
                                $result3 = $stmt->execute(
                                    array(
                                        'ID' => $message['ID'],
                                    )
                                );
                            } catch (PDOException $e) {
                                $app['monolog']->error($e->getMessage());
                            }
                        }
                    }
                }
            }
        }

        // Send back the messages
        if (!empty($toSend)) {
            return $toSend;
        } else {
            return 'NoNewMessages';
        }
    }
)->bind('fetch');

$app->match(
    '/install',
    function (Request $request) use ($app) {
        try {
            $pdo = new PDO('sqlite:' . dirname(__FILE__) . '/../db/diceroller.sqlite');
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            $app['monolog']->error("Impossible d'accéder à la base de données SQLite : " . $e->getMessage());
            die();
        }

        $pdo->query(
            "CREATE TABLE IF NOT EXISTS Rooms ( 
                      ID INTEGER PRIMARY KEY,
                      room_name text,
                      room_dice text,
                      room_users longtext,
                      last_updated bigint(20)
                      )"
        );

        $pdo->query(
            "CREATE TABLE IF NOT EXISTS Messages ( 
                      ID INTEGER PRIMARY KEY,
                      room_name text,
                      message_readers longtext,
                      message_content longtext
                      )"
        );

        return New Response;
    }
)->bind('install');

$app->run();