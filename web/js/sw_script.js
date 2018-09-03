// Dice roller part

var PipSize = 32; // Base pip size

var die = new Array;

die[0] = {
    "c": "proficiency", "scale": 1.0, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 2, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 2, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 2, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 2, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 0, "t": 1, "d": 0, "ls": 0, "ds": 0}]
};
die[1] = {
    "c": "ability", "scale": 0.7, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 2, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 2, "t": 0, "d": 0, "ls": 0, "ds": 0}]
};
die[2] = {
    "c": "boost", "scale": 1.0, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 2, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0}]
};
die[3] = {
    "c": "challenge", "scale": 0.9, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -2, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -2, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -2, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -2, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 1, "ls": 0, "ds": 0}]
};
die[4] = {
    "c": "difficulty", "scale": 0.7, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -2, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -2, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0}]
};
die[5] = {
    "c": "setback", "scale": 1.0, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": -1, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0},
        {"s": 0, "a": -1, "t": 0, "d": 0, "ls": 0, "ds": 0}]
};
die[6] = {
    "c": "force", "scale": 0.6, "sides": [
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 1},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 1},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 1},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 1},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 1},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 1},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 2},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 1, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 1, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 2, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 2, "ds": 0},
        {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 2, "ds": 0}]
};

function ParseQuery(query) {
    var args = query.substring(1).split('&');

    parsed = {};

    for (i = 0; i < args.length; i++) {
        arg = unescape(args[i]);

        if (arg.indexOf('=') == -1) parsed[arg.trim()] = true;
        else {
            kvp = arg.split('=');
            parsed[kvp[0].trim()] = kvp[1].trim();
        }
    }
    return parsed;
}

var argsParsed = ParseQuery(document.location.hash);
var queryParsed = ParseQuery(document.location.search);

var title = argsParsed["title"];

function SetDocumentTitle() {
    if (title && title.length) document.title = title + " - EotE Die Roller";
    else document.title = "EotE Die Roller";
}

SetDocumentTitle();

var dieCount = new Array;

for (var init = 0; init < die.length; init++) {
    dieCount[init] = argsParsed[die[init].c];
}

function SetQuery() {
    var query = "";
    for (var i = 0; i < die.length; i++) {
        if (dieCount[i]) {
            if (query.length) query += "&";
            query += die[i].c + "=" + dieCount[i];
        }
    }
    if (title && title.length) {
        if (query.length) query += "&";
        query += "title=" + title;
    }
    if (query.length) document.location.hash = "#" + query;
    else document.location.hash = "";
}

function UpdateCount(type, value) {
    $("#spinnerBox").show();
    $("#spinnerBox").height(48);
    dieCount[type] = value;
    RefreshCount(type);
    SetQuery();

    AdjustDice();
}

function RefreshCount(type) {
    var div = document.getElementById("count" + type);
    var html = "";
    if (div) {
        var imageBase = die[type].c;
        for (var i = 0; i < dieCount[type]; i++) {
            html += "<span class=\"select48 " + imageBase + "img\" onClick=\"UpdateCount(" + type + "," + (i == dieCount[type] - 1 ? 0 : i + 1) + ")\"></span>";
        }
        for (; i < 5; i++) {
            html += "<span class=\"select48 " + imageBase + "img faded\" onClick=\"UpdateCount(" + type + "," + (i + 1) + ")\"></span>";
        }
    }
    div.innerHTML = html;
}

function Roll(dieArray) {
    var result = new Array;

    for (i = 0; i < dieArray.length; i++) {
        var face = Math.floor(Math.random() * dieArray[i].sides.length);
        result[i] = dieArray[i].sides[face];
        result[i].c = dieArray[i].c;
        result[i].scale = dieArray[i].scale;
        result[i].random = Math.random();
    }
    return result;
}

function SetRoll(dieArray, randomString) {
    var result = new Array;

    var randomArray = randomString.match(/\w+/g);

    if (randomArray.length != dieArray.length) {
        return Roll(dieArray);
    }

    for (i = 0; i < dieArray.length; i++) {
        var face = Math.floor((randomArray[i] * dieArray[i].sides.length) / 24);
        result[i] = dieArray[i].sides[face];
        result[i].c = dieArray[i].c;
        result[i].scale = dieArray[i].scale;
        result[i].random = Math.random();
    }
    result.random = true;
    return result;
}

function Total(resultArray) {
    var result = {"s": 0, "a": 0, "t": 0, "d": 0, "ls": 0, "ds": 0, "c": "total", "random": resultArray.random};

    for (i = 0; i < resultArray.length; i++) {
        result.s += resultArray[i].s;
        result.a += resultArray[i].a;
        result.t += resultArray[i].t;
        result.d += resultArray[i].d;
        result.ls += resultArray[i].ls;
        result.ds += resultArray[i].ds
    }

    return result;
}

function RenderType(type) {
    return "<span class=\"totalitem " + type + " " + type + "img total40\"></span>";
}

function RenderTotal(total) {
    var html = "";
    var success = total.s + total.t - total.d;
    if (success < 0) {
        html += "<span title=\"Failure\" class=\"total\">";
        html += RenderType("failure");
        html += "</span> ";
    }
    else if (success > 0) {
        html += "<span title=\"" + success + " Successes\" class=\"total\">";
        for (var c = 0; c < success; c++) html += RenderType("success");
        html += "</span> ";
    }
    if (total.a < 0) {
        html += "<span title=\"" + Math.abs(total.a) + " Threat\" class=\"total\">";
        for (var c = 0; c > total.a; c--) html += RenderType("threat");
        html += "</span> ";
    }
    else if (total.a > 0) {
        html += "<span title=\"" + total.a + " Advantage\" class=\"total\">";
        for (var c = 0; c < total.a; c++) html += RenderType("advantage");
        html += "</span> ";
    }
    if (total.t) {
        html += "<span title=\"" + total.t + " Triumph\" class=\"total\">";
        for (var c = 0; c < total.t; c++) html += RenderType("triumph");
        html += "</span> ";
    }
    if (total.d) {
        html += "<span title=\"" + total.d + " Despair\" class=\"total\">";
        for (var c = 0; c < total.d; c++) html += RenderType("despair");
        html += "</span> ";
    }
    if (total.ls) {
        html += "<span title=\"" + total.ls + " Light Side\" class=\"total\">";
        for (var c = 0; c < total.ls; c++) html += RenderType("lightside");
        html += "</span> ";
    }
    if (total.ds) {
        html += "<span title=\"" + total.ds + " Dark Side\" class=\"total\">";
        for (var c = 0; c < total.ds; c++) html += RenderType("darkside");
        html += "</span> ";
    }
    return html;
}

function RenderPip(type, size, padding) {
    var padSegment = "";
    if (padding != 0) padSegment = " style=\"padding-top: " + padding + "px\"";
    var label = type.charAt(0).toUpperCase() + type.substr(1);
    return "<span " + padSegment + " class=\"pip pip" + size + " " + type + "img\" title=\"" + label + "\"></span><br>";
}

function RenderFace(face) {
    var html = "";
    var size = PipSize;
    var padSize = 0;
    var count = face.s + face.a + face.ls + face.ds;
    if (count >= 2 || count <= -2) size = PipSize / 2;
    else {
        var newSize = size * face.scale;
        padSize = (size - newSize) / 2;
        size = Math.floor(newSize);
        padSize = Math.ceil(padSize);
    }

    if (face.a < 0) {
        for (var c = 0; c > face.a; c--) html += RenderPip("threat", size, padSize);
    }
    else {
        for (var c = 0; c < face.a; c++) html += RenderPip("advantage", size, padSize);
    }
    if (face.s < 0) {
        for (var c = 0; c > face.s; c--) html += RenderPip("failure", size, padSize);
    }
    else {
        for (var c = 0; c < face.s; c++) html += RenderPip("success", size, padSize);
    }
    for (var c = 0; c < face.t; c++) html += RenderPip("triumph", size, padSize);
    ;

    for (var c = 0; c < face.d; c++) html += RenderPip("despair", size, padSize);

    for (var c = 0; c < face.ls; c++) html += RenderPip("lightside", size, padSize);
    for (var c = 0; c < face.ds; c++) html += RenderPip("darkside", size, padSize);

    return html;
}

function TitleChange() {
    var titleInput = document.getElementById("title");
    if (titleInput) {
        title = titleInput.value;
    }

    SetDocumentTitle();
    SetQuery();
}

function OnLoad() {
    for (var i = 0; i < die.length; i++) {
        RefreshCount(i);
    }
    AdjustDice();

    var titleInput = document.getElementById("title");
    if (titleInput && title) titleInput.value = title;

    if (typeof window.DeviceMotionEvent != 'undefined') {
        // Shake sensitivity (a lower number is more)
        var sensitivity = 20;

        // Position variables
        var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

        // Listen to motion events and update the position
        window.addEventListener('devicemotion', function (e) {
            x1 = e.acceleration.x;
            y1 = e.acceleration.y;
            z1 = e.acceleration.z;
        }, false);

        setInterval(function () {
            var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);

            if (change > sensitivity) {
                WheelRoll();
            }

            // Update new position
            x2 = x1;
            y2 = y1;
            z2 = z1;
        }, 150);
    }
}


var spins = 0;
var interval = 0;
var currentRoll;
var dice;
var rollIndex = 0;

function DrawDice(set) {
    var body = "";
    for (var j = 0; j < set.length; j++) {
        body += "<div class=\"" + set[j].c + " diebox\">" + RenderFace(set[j]) + "</div>";
    }
    if (body.length == 0) body = "<div class=\"paddie\"></div>";
    var spinner = document.getElementById("spinner");
    if (spinner) document.getElementById("spinner").innerHTML = body;
}

function DoSpin(random) {
    if (dice) {
        currentRoll = Roll(dice);

        if (random) currentRoll.sort(function sort(a, b) {
            return a.random - b.random
        });

        DrawDice(currentRoll);
    }
}

function ReceiveRandomResult(randomString) {
    if (dice) {
        currentRoll = SetRoll(dice, randomString);
        DrawDice(currentRoll);
    }
}

function DrawTotal(rolledDice) {
    var totalContent = RenderTotal(Total(rolledDice));
    sendToOtherPlayers(totalContent);
    totalContent = '<div class="title">' + $("#user").html() + '</div>' + totalContent + '<hr>'
    $("#total").prepend(totalContent);
}

function SpinOnce() {
    if (spins > 0) DoSpin(spins > 1);
    else {
        if (interval) window.clearInterval(interval);
        if (currentRoll) DrawTotal(currentRoll);
    }
    spins--;
}

function AdjustDice() {
    var templateDice = new Array;
    var diceIndex = 0, rollIndex = 0;
    if (currentRoll) templateDice.random = currentRoll.random;
    else templateDice.random = false;
    for (var i = 0; i < dieCount.length; i++) {
        for (var j = 0; j < dieCount[i]; j++) {
            if (currentRoll && rollIndex < currentRoll.length && currentRoll[rollIndex].c == die[i].c)
                templateDice[diceIndex++] = currentRoll[rollIndex++];
            else
                templateDice[diceIndex++] = {
                    "c": die[i].c + " faded",
                    "scale": die[i].scale,
                    "s": 0,
                    "a": 0,
                    "t": 0,
                    "d": 0,
                    "ls": 0,
                    "ds": 0
                };
        }
        while (currentRoll && rollIndex < currentRoll.length && currentRoll[rollIndex].c == die[i].c)
            rollIndex++;
    }
    DrawDice(templateDice);
    //if (!queryParsed["montecarlo"]) DrawTotal(templateDice);
}

function SetDice() {
    dice = new Array;
    var diceIndex = 0;
    for (var i = 0; i < dieCount.length; i++) {
        for (var j = 0; j < dieCount[i]; j++) {
            dice[diceIndex++] = die[i];
        }
    }
}

function Increment(value) {
    if (value == undefined || value == NaN) value = 1;
    else value++;

    return value;
}

function ResultEntry(label, percent, type) {
    var html = "<div class=\"monte\">";
    html += "<div style=\"display: inline-block; width: 16px; text-align: right\">" + label + "</div>";
    html += " <span alt=\"" + type.charAt(0).toUpperCase() + "\"class=\"monteitem " + type + " " + type + "img\"></span> ";
    html += Math.round(percent * 10000, 4) / 10000;
    html += "%</div>";
    return html;
}

function ResultTotal(successCount, type, monteCarlo) {
    var html = "<td valign=\"top\">";
    var total = 0;
    for (var j = 1; j < successCount.length; j++)
        if (successCount[j]) total += successCount[j];
    if (total) html += ResultEntry("", total * 100 / monteCarlo, type);
    html += "</td>";
    return html
}

function ResultSet(successCount, type, monteCarlo) {
    var html = "<td valign=\"top\">";
    for (var j = 1; j < successCount.length; j++) {
        if (successCount[j]) {
            var percent = successCount[j] * 100 / monteCarlo;
            html += ResultEntry(j, percent, type);
        }
    }
    html += "</td>";
    return html;
}

function RunMonteCarlo(monteCarlo) {
    var successCount = new Array();
    var advantageCount = new Array();
    var threatCount = new Array();
    var despairCount = new Array();
    var triumphCount = new Array();
    var dsCount = new Array();
    var lsCount = new Array();
    var failCount = new Array();
    for (var i = 0; i < monteCarlo; i++) {
        var currentRoll = Roll(dice);
        var total = Total(currentRoll);
        var success = total.s + total.t - total.d;
        if (success >= 0) successCount[success] = Increment(successCount[success]);
        else failCount[-success] = Increment(failCount[-success]);
        despairCount[total.d] = Increment(despairCount[total.d]);
        triumphCount[total.t] = Increment(triumphCount[total.t]);
        if (total.a >= 0) advantageCount[total.a] = Increment(advantageCount[total.a]);
        else threatCount[-total.a] = Increment(threatCount[-total.a]);
        lsCount[total.ls] = Increment(lsCount[total.ls]);
        dsCount[total.ds] = Increment(dsCount[total.ds]);
    }
    var html = "<table><tr>";
    html += ResultTotal(successCount, "success", monteCarlo);
    html += ResultTotal(failCount, "failure", monteCarlo);
    html += ResultTotal(advantageCount, "advantage", monteCarlo);
    html += ResultTotal(threatCount, "threat", monteCarlo);
    html += ResultTotal(triumphCount, "triumph", monteCarlo);
    html += ResultTotal(despairCount, "despair", monteCarlo);
    html += ResultTotal(lsCount, "lightside", monteCarlo);
    html += ResultTotal(dsCount, "darkside", monteCarlo);
    html += "</tr><tr>";
    html += ResultSet(successCount, "success", monteCarlo);
    html += ResultSet(failCount, "failure", monteCarlo);
    html += ResultSet(advantageCount, "advantage", monteCarlo);
    html += ResultSet(threatCount, "threat", monteCarlo);
    html += ResultSet(triumphCount, "triumph", monteCarlo);
    html += ResultSet(despairCount, "despair", monteCarlo);
    html += ResultSet(lsCount, "lightside", monteCarlo);
    html += ResultSet(dsCount, "darkside", monteCarlo);
    html += "</table></tr>";
    document.getElementById("total").innerHTML = html.length ? html : "<div class=\"padtotal\">";
}

function WheelRoll() {
    SetDice();
    $("#spinner").show();
    $("#spinnerBox").show();
    $("#spinnerBox").height(48);
    $("#total").show();
    $("#Result").show();
    if (interval) window.clearInterval(interval);

    var monteCarlo = queryParsed["montecarlo"];

    if (monteCarlo) {
        RunMonteCarlo(monteCarlo);
    }
    else {
        spins = Math.floor(Math.random() * 20) + 10;
        interval = window.setInterval(SpinOnce, 50);
    }
}

function UseRandom() {
    window.location = "?user=" + $("#user").html() + "&dice=" + $("#dice").html() + "?" + "?random" + document.location.hash;
}

function MonteCarlo() {
    window.location = "?user=" + $("#user").html() + "&dice=" + $("#dice").html() + "?" + "?montecarlo=100000" + document.location.hash;
}

function RollNormal() {
    window.location = "?user=" + $("#user").html() + "&dice=" + $("#dice").html() + "?" + document.location.hash;
}


// Sharing results part
function sendToOtherPlayers(html) {
    var basePath = $("#baseURL").text();
    var path = $(location).attr('pathname');
    var result = path.split('/');
    var room = result[result.length - 1];
    var user = $('#user').text();
    $.ajax({
        type: "POST",
        url: basePath + "/push",
        data: {
            room: room,
            user: user,
            html: html
        },
        success: function (data) {
            console.log('Roll sent');
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    })
}

$(document).ready(function () {
    // Hide spinner and total on arrival
    $("#spinnerBox").hide();
    $("#Result").hide();

    // Regularly fetch others dice rolls
    setInterval(function () {
        var basePath = $("#baseURL").text();
        var path = $(location).attr('pathname');
        var result = path.split('/');
        var room = result[result.length - 1];
        var user = $('#user').text();
        $.ajax({
            type: "POST",
            url: basePath + "/fetch",
            datatype: "html",
            data: {
                room: room,
                user: user
            },
            success: function (data) {
                if (data == 'NoNewMessages') {
                    console.log('No new messages');
                }
                else {
                    $("#total").show();
                    $("#total").prepend(data);
                }
            }
        });

    }, 3000);
});
