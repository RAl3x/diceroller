$(document).ready(function () {

    // clear fields on click
    $(".form input").on('click', function () {
        $(this).val('');
    });

    // If the user go to an existing room, ask for his name
    $(".goToRoom").on('click', function () {
        $("#goToRoom").text($(this).text());
        var popID = $(this).data('rel'); //Trouver la pop-up correspondante
        var popWidth = $(this).data('width'); //Trouver la largeur

        //Faire apparaitre la pop-up et ajouter le bouton de fermeture
        $('#' + popID).fadeIn().css({'width': popWidth}).prepend('<a href="#" class="close"><img src="images/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');

        //Récupération du margin, qui permettra de centrer la fenêtre - on ajuste de 80px en conformité avec le CSS
        var popMargTop = ($('#' + popID).height() + 80) / 2;
        var popMargLeft = ($('#' + popID).width() + 80) / 2;

        //Apply Margin to Popup
        $('#' + popID).css({
            'margin-top': -popMargTop,
            'margin-left': -popMargLeft
        });

        //Apparition du fond - .css({'filter' : 'alpha(opacity=80)'}) pour corriger les bogues d'anciennes versions de IE
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter': 'alpha(opacity=80)'}).fadeIn();

        return false;
    });

    //Close Popups and Fade Layer
    $('body').on('click', 'a.close, #fade', function () { //Au clic sur le body...
        $('#fade , .popupBlock').fadeOut(function () {
            $('#fade, a.close').remove();
        }); //...ils disparaissent ensemble

        return false;
    });

    // Go to the room from the popup
    $("#popupSubmit").on('click', function() {
        var userName = $("#userName").val();
        if (userName == '') {
            $("#userName").addClass('error');
            return false;
        } else {
            $("#userName").removeClass('error');
        }
        var basePath = $("#baseURL").text();
        var room = $("#goToRoom").text();
        room = room.replace(/ /g,'_');

        var url = basePath + '/room/' + room + '?user=' + userName;

        window.location.href = url;
    });

    // Submit popup on pressing enter
    $("#userName").on('keypress', function(e) {
        if (e.which == 13) {
            $("#popupSubmit").click();
        }
    });
});
