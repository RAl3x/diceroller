// Dice Roller Part

var PipSize = 32; // Base pip size

var die = new Array;

die[0] = {
    "c": "characteristic", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        }]
};
die[1] = {
    "c": "conservative", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 1,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 1,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        }]
};
die[2] = {
    "c": "reckless", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 1,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 1,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 2,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 1,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 1,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 2,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 2,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        }]
};
die[3] = {
    "c": "expertise", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 1,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 1
        }]
};
die[4] = {
    "c": "fortune", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 1,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 1,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        }]
};
die[5] = {
    "c": "challenge", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 1,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 2,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 2,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 1,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 1,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 2,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 1,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        }]
};
die[6] = {
    "c": "misfortune", "scale": 0.7, "sides": [
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 1,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 1,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 1,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        },
        {
            "success": 0,
            "righteoussuccess": 0,
            "challenge": 0,
            "bane": 0,
            "boon": 0,
            "chaos": 0,
            "delay": 0,
            "exertion": 0,
            "comet": 0
        }]
};

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

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
    if (title && title.length) document.title = title + " - WFRP3E Dice Roller";
    else document.title = "WFRP3E Dice Roller";
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
            html += "<img class=\"select\" src=\"../images/" + imageBase + i + ".png\" onClick=\"UpdateCount(" + type + "," + (i == dieCount[type] - 1 ? 0 : i + 1) + ")\" title=\"" + toTitleCase(imageBase) + "\">";
        }
        for (; i < 6; i++) {
            html += "<img class=\"select faded\" src=\"../images/" + imageBase + i + ".png\" onClick=\"UpdateCount(" + type + "," + (i + 1) + ")\" title=\"" + toTitleCase(imageBase) + "\">";
        }
    }
    div.innerHTML = html;
}

function Roll(dieArray, explode) {
    var result = new Array;
    for (i = 0; i < dieArray.length; i++) {
        RollDie(dieArray[i], result, null, explode);
    }
    return result;
}

function RollDie(die, result, random, explode) {
    // process the current die
    var i = result.length;
    var face;
    if (random == null)
        face = Math.floor(Math.random() * die.sides.length);
    else
        face = Math.floor((random * die.sides.length) / 24);
    result[i] = die.sides[face];
    result[i].c = die.c;
    result[i].scale = die.scale;
    result[i].random = Math.random();

    // explode righteous successes
    if (explode && result[i].righteoussuccess != 0) {
        RollDie(die, result, null, explode);
    }
}

function SetRoll(dieArray, randomString) {
    var result = new Array;
    var randomArray = randomString.match(/\w+/g);
    if (randomArray.length != dieArray.length) {
        return Roll(dieArray, true);
    }
    for (i = 0; i < dieArray.length; i++) {
        RollDie(dieArray[i], result, randomArray[i], true);
    }
    result.random = true;
    return result;
}

function Total(resultArray) {
    var result = {
        "success": 0,
        "righteoussuccess": 0,
        "challenge": 0,
        "bane": 0,
        "boon": 0,
        "chaos": 0,
        "delay": 0,
        "exertion": 0,
        "comet": 0,
        "c": "total",
        "random": resultArray.random
    };
    for (i = 0; i < resultArray.length; i++) {
        result.success += resultArray[i].success;
        result.righteoussuccess += resultArray[i].righteoussuccess;
        result.challenge += resultArray[i].challenge;
        result.bane += resultArray[i].bane;
        result.boon += resultArray[i].boon;
        result.chaos += resultArray[i].chaos;
        result.delay += resultArray[i].delay;
        result.exertion += resultArray[i].exertion;
        result.comet += resultArray[i].comet;
    }
    return result;
}

function RenderType(type) {
    return "<img src=\"../images/" + type + ".png\" class=\"totalitem " + type + "\">";
}

function RenderResults(total) {
    var html = "";
    html += RenderTotal(total);
    html += RenderSummary(total);
    return html;
}

function RenderTotal(total) {
    var html = "";
    if (currentRoll) {
        // success or failure
        var successes = total.success + total.righteoussuccess - total.challenge;
        if (successes > 1) {
            html += "<span title=\"" + successes + " Successes\" class=\"total\">";
            for (var c = 0; c < successes; c++) html += RenderType("successwhite");
            html += "</span>";
        }
        else if (successes > 0) {
            html += "<span title=\"1 Success\" class=\"total\">";
            html += RenderType("successwhite");
            html += "</span>";
        }
        else if (successes < -1) {
            html += "<span title=\"" + Math.abs(successes) + " Challenges\" class=\"total\">";
            for (var c = 0; c > successes; c--) html += RenderType("challengewhite");
            html += "</span>";
        }
        else if (successes < 0) {
            html += "<span title=\"1 Challenge\" class=\"total\">";
            html += RenderType("challengewhite");
            html += "</span>";
        }

        // boons or banes
        var boons = total.boon - total.bane;
        if (boons > 1) {
            html += "<span title=\"" + boons + " Boons\" class=\"total\">";
            for (var c = 0; c < boons; c++) html += RenderType("boonblack");
            html += "</span>";
        }
        else if (boons > 0) {
            html += "<span title=\"1 Boon\" class=\"total\">";
            html += RenderType("boonblack");
            html += "</span>";
        }
        else if (boons < -1) {
            html += "<span title=\"" + Math.abs(boons) + " Banes\" class=\"total\">";
            for (var c = 0; c > boons; c--) html += RenderType("banewhite");
            html += "</span>";
        }
        else if (boons < 0) {
            html += "<span title=\"1 Bane\" class=\"total\">";
            html += RenderType("banewhite");
            html += "</span>";
        }

        // comets
        if (total.comet > 1) {
            html += "<span title=\"" + total.comet + " Comets\" class=\"total\">";
            for (var c = 0; c < total.comet; c++) html += RenderType("cometblack");
            html += "</span>";
        }
        else if (total.comet > 0) {
            html += "<span title=\"1 Comet\" class=\"total\">";
            html += RenderType("cometblack");
            html += "</span>";
        }

        // chaos
        if (total.chaos > 1) {
            html += "<span title=\"" + total.chaos + " Chaos Stars\" class=\"total\">";
            for (var c = 0; c < total.chaos; c++) html += RenderType("chaoswhite");
            html += "</span>";
        }
        else if (total.chaos > 0) {
            html += "<span title=\"1 Chaos Star\" class=\"total\">";
            html += RenderType("chaoswhite");
            html += "</span>";
        }

        // delay
        if (total.delay > 1) {
            html += "<span title=\"" + total.delay + " Delays\" class=\"total\">";
            for (var c = 0; c < total.delay; c++) html += RenderType("delayblack");
            html += "</span>";
        }
        else if (total.delay > 0) {
            html += "<span title=\"1 Delay\" class=\"total\">";
            html += RenderType("delayblack");
            html += "</span>";
        }

        // exertion
        if (total.exertion > 1) {
            html += "<span title=\"" + total.exertion + " Exertions\" class=\"total\">";
            for (var c = 0; c < total.exertion; c++) html += RenderType("exertionblack");
            html += "</span>";
        }
        else if (total.exertion > 0) {
            html += "<span title=\"1 Exertion\" class=\"total\">";
            html += RenderType("exertionblack");
            html += "</span>";
        }

        // random
        if (total.random) {
            html += "<span title=\"Generated by RANDOM.ORG\" class=\"total\">";
            html += RenderType("random");
            html += "</span>";
        }
    }
    if (html.length) {
        html = "<div style=\"margin-bottom:8px\">" + html + "</div>"
    }
    return html;
}

function RenderSummary(total) {
    var html = "";
    if (currentRoll) {
        // rolled
        var rolled = "";
        for (var i = 0; i < die.length; i++) {
            if (dieCount[i] > 0) {
                rolled += dieCount[i] + ' ' + toTitleCase(die[i].c) + ', ';
            }
        }
        if (rolled.length) {
            html += "<span class=\"summary\">";
            html += "<b>Rolled:</b> " + rolled.substring(0, (rolled.length - 2));
            html += "</span>";

            // result
            var result = ""

            // success or failure
            var successes = total.success + total.righteoussuccess - total.challenge;
            if (successes > 1)
                result += successes + " Successes, ";
            else if (successes > 0)
                result += "1 Success, ";
            else if (successes < -1)
                result += Math.abs(successes) + " Challenges, ";
            else if (successes < 0)
                result += "1 Challenge, ";

            // boons or banes
            var boons = total.boon - total.bane;
            if (boons > 1)
                result += boons + " Boons, ";
            else if (boons > 0)
                result += "1 Boon, ";
            else if (boons < -1)
                result += Math.abs(boons) + " Banes, ";
            else if (boons < 0)
                result += "1 Bane, ";

            // comets
            if (total.comet > 1)
                result += total.comet + " Comets, ";
            else if (total.comet > 0)
                result += "1 Comet, ";

            // chaos stars
            if (total.chaos > 1)
                result += total.chaos + " Chaos Stars, ";
            else if (total.chaos > 0)
                result += "1 Chaos Star, ";

            // delay
            if (total.delay > 1)
                result += total.delay + " Delays, ";
            else if (total.delay > 0)
                result += "1 Delay, ";

            // exertion
            if (total.exertion > 1)
                result += total.exertion + " Exertions, ";
            else if (total.exertion > 0)
                result += "1 Exertion, ";

            if (result.length)
                result = result.substring(0, (result.length - 2));
            else
                result += " None";

            html += "<span class=\"summary\">";
            html += "<b>Result:</b> " + result;
            html += "</span>";

            // timestamp
            html += "<span class=\"summary\">";
            html += "<i>" + new Date() + "</i>";
            html += "</span>";
        }
    }
    return html;
}

function RenderPip(label, type, size, padding) {
    var padSegment = "";
    if (padding != 0) padSegment = " style=\"padding-top: " + padding + "px\"";
    return "<img width=" + size + " height=" + size + padSegment + " src=\"../images/" + type + ".png\" class=\"pip\" title=\"" + label + "\">";
}

function RenderFace(face) {
    var html = "";
    var size = PipSize;
    var padSize = 0;
    var count = face.success + face.righteoussuccess + face.challenge + face.bane + face.boon + face.chaos + face.delay + face.exertion + face.comet;
    if (count > 1) {
        var newSize = size / 2;
        size = Math.floor(newSize);
    }
    else if (face.scale != 1) {
        var newSize = size * face.scale;
        size = Math.floor(newSize);
        padSize = (PipSize - size) / 2;
        padSize = Math.ceil(padSize);
    }
    var color = "black";
    if (face.c == "characteristic" || face.c == "challenge" || face.c == "misfortune") color = "white";
    for (var c = 0; c < face.success; c++) html += RenderPip("Success", "success" + color, size, padSize);
    for (var c = 0; c < face.righteoussuccess; c++) html += RenderPip("Righteous Success", "righteoussuccess" + color, size, padSize);
    for (var c = 0; c < face.challenge; c++) html += RenderPip("Challenge", "challenge" + color, size, padSize);
    ;
    for (var c = 0; c < face.bane; c++) html += RenderPip("Bane", "bane" + color, size, padSize);
    for (var c = 0; c < face.boon; c++) html += RenderPip("Boon", "boon" + color, size, padSize);
    for (var c = 0; c < face.chaos; c++) html += RenderPip("Chaos Star", "chaos" + color, size, padSize);
    for (var c = 0; c < face.delay; c++) html += RenderPip("Delay", "delay" + color, size, padSize);
    for (var c = 0; c < face.exertion; c++) html += RenderPip("Exertion", "exertion" + color, size, padSize);
    for (var c = 0; c < face.comet; c++) html += RenderPip("Comet", "comet" + color, size, padSize);
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
    if (!queryParsed["montecarlo"]) {
        for (var j = 0; j < set.length; j++) {
            body += "<div class=\"" + set[j].c + " diebox\">" + RenderFace(set[j]) + "</div>";
        }
    }
    document.getElementById("spinner").innerHTML = body;
    if (body.length)
        document.getElementById("spinner").style.display = "";
}

function DoSpin(random) {
    if (dice) {
        currentRoll = Roll(dice, true);
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
    var totalContent;
    if (RenderResults(Total(rolledDice)) != '') {
        totalContent = '<div class="title">' + $("#user").html() + '</div>' + RenderResults(Total(rolledDice)) + '<hr>';
    }
    else {
        totalContent = '';
    }
    if (queryParsed["montecarlo"] || !totalContent.length)
        document.getElementById("total").style.display = "";
    else {
        $("#total").prepend(totalContent);
        document.getElementById("total").style.display = "";
    }
    return RenderResults(Total(rolledDice));
}

function SpinOnce() {
    var html;
    if (spins > 0) DoSpin(spins > 1);
    else {
        if (interval) window.clearInterval(interval);
        if (currentRoll) {
            html = DrawTotal(currentRoll);
            if (html != '') {
                sendToOtherPlayers(html);
            }
        }
    }
    spins--;
}

function AdjustDice() {
    var templateDice = new Array;
    var diceIndex = 0, rollIndex = 0;
    currentRoll = null;
    //if (currentRoll) templateDice.random = currentRoll.random;
    //else templateDice.random = false;
    for (var i = 0; i < dieCount.length; i++) {
        for (var j = 0; j < dieCount[i]; j++) {
            if (currentRoll && rollIndex < currentRoll.length && currentRoll[rollIndex].c == die[i].c)
                templateDice[diceIndex++] = currentRoll[rollIndex++];
            else
                templateDice[diceIndex++] = {
                    "c": die[i].c + " faded",
                    "scale": die[i].scale,
                    "success": 0,
                    "righteoussuccess": 0,
                    "challenge": 0,
                    "bane": 0,
                    "boon": 0,
                    "chaos": 0,
                    "delay": 0,
                    "exertion": 0,
                    "comet": 0
                };
        }
        while (currentRoll && rollIndex < currentRoll.length && currentRoll[rollIndex].c == die[i].c)
            rollIndex++;
    }
    DrawDice(templateDice);
    DrawTotal(templateDice);
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

function ResultEntry(label, title, percent, type) {
    var html = "<div class=\"monte\">";
    html += "<div style=\"display: inline-block; width: 16px; text-align: right;\">" + label + "</div>";
    html += " <img src=\"../images/" + type + ".png\" title=\"" + title + "\" class=\"monteitem " + type + "\"> ";
    html += Math.round(percent * 10000, 4) / 10000;
    html += "%</div>";
    return html;
}

function ResultTotal(successCount, type, title, alwaysRender, monteCarlo) {
    var html = "";
    var total = 0;
    for (var j = 0; j < successCount.length; j++)
        if (successCount[j]) total += successCount[j];
    if (total || alwaysRender)
        html += ResultEntry("", title, Math.round(total * 100 / monteCarlo), type);
    return html
}

function ResultSet(successCount, type, title, alwaysRender, monteCarlo) {
    var html = "";
    for (var j = 1; j < successCount.length; j++) {
        if (successCount[j]) {
            var percent = Math.round(successCount[j] * 100 / monteCarlo);
            if (percent)
                html += ResultEntry(j, "", percent, type);
        }
    }
    return html;
}

function ResultMonteCarlo(successCount, type, title, alwaysRender, monteCarlo) {
    var html = ResultTotal(successCount, type, title, alwaysRender, monteCarlo);
    if (html.length) {
        html = "<div style=\"display: inline-block; vertical-align:top; text-align: left;\"><div style=\"margin-top: 7px; margin-bottom: 3px;\">" + html + "</div>";
        html += "<div style=\"margin-top: 0px; margin-bottom: 7px;\">" + ResultSet(successCount, type, title, alwaysRender, monteCarlo) + "</div>";
        html += "</div>";
    }
    return html;
}

function RunMonteCarlo(monteCarlo) {
    var successCount = new Array();
    var failCount = new Array();
    var boonCount = new Array();
    var baneCount = new Array();
    var cometCount = new Array();
    var chaosCount = new Array();
    var delayCount = new Array();
    var exertionCount = new Array();

    for (var i = 0; i < monteCarlo; i++) {
        var currentRoll = Roll(dice, true);
        var total = Total(currentRoll);

        var successes = total.success + total.righteoussuccess - total.challenge;
        if (successes > 0)
            successCount[successes] = Increment(successCount[successes]);
        else
            failCount[-successes] = Increment(failCount[-successes]);

        var boons = total.boon - total.bane;
        if (boons > 0)
            boonCount[boons] = Increment(boonCount[boons]);
        else if (boons < 0)
            baneCount[-boons] = Increment(baneCount[-boons]);

        if (total.comet > 0) cometCount[total.comet] = Increment(cometCount[total.comet]);
        if (total.chaos > 0) chaosCount[total.chaos] = Increment(chaosCount[total.chaos]);
        if (total.delay > 0) delayCount[total.delay] = Increment(delayCount[total.delay]);
        if (total.exertion > 0) exertionCount[total.exertion] = Increment(exertionCount[total.exertion]);
    }

    var html = "";
    html += ResultMonteCarlo(successCount, "successwhite", "Probability of Success", true, monteCarlo);
    html += ResultMonteCarlo(failCount, "challengewhite", "Probability of Failure", true, monteCarlo);
    html += ResultMonteCarlo(boonCount, "boonblack", "Probability of 1 or more Boons after removing Banes", false, monteCarlo);
    html += ResultMonteCarlo(baneCount, "banewhite", "Probability of 1 or more Banes after removing Boons", false, monteCarlo);
    html += ResultMonteCarlo(cometCount, "cometblack", "Probability of 1 or more Comets", false, monteCarlo);
    html += ResultMonteCarlo(chaosCount, "chaoswhite", "Probability of 1 or more Chaos Stars", false, monteCarlo);
    html += ResultMonteCarlo(delayCount, "delayblack", "Probability of 1 or more Delays", false, monteCarlo);
    html += ResultMonteCarlo(exertionCount, "exertionblack", "Probability of 1 or more Exertions", false, monteCarlo);
    html += '<hr>';
    if (!html.length)
        document.getElementById("total").style.display = "";
    else {
        $("#total").prepend(html);
        document.getElementById("total").style.display = "";
    }
    return html;
}

function WheelRoll() {
    var html = '';
    SetDice();
    if (interval) window.clearInterval(interval);

    var monteCarlo = queryParsed["montecarlo"];

    if (monteCarlo) {
        html = RunMonteCarlo(monteCarlo);
    }
    else {
        spins = Math.floor(Math.random() * 20) + 10;

        if (argsParsed["random"] || queryParsed["random"]) {
            try {
                var randomRequest = new XMLHttpRequest();
                randomRequest.open("POST", "http://www.random.org/integers/?num=" + dice.length + "&min=0&max=119&col=1&base=10&format=plain&rnd=new", true);
                randomRequest.current = ++rollIndex;
                randomRequest.onreadystatechange = function () {
                    console('state change');
                    if (interval) window.clearInterval(interval);
                    if (randomRequest.readyState != 4) return;
                    var success = true;
                    if (randomRequest.status != 200 && randomRequest.status != 304) success = false;
                    if (randomRequest.current == rollIndex) {
                        if (success) ReceiveRandomResult(randomRequest.responseText);
                        else DoSpin(false);
                        if (currentRoll)
                            html = DrawTotal(currentRoll);
                    }
                }
                randomRequest.send();
                spins = 100;
            }
            catch (err) {
            }
        }
        interval = window.setInterval(SpinOnce, 50);
    }
    if (html != '') {
        sendToOtherPlayers(html);
    }
}

function Reset() {
    for (var i = 0; i < die.length; i++) {
        UpdateCount(i, 0);
    }
}

function UseRandom() {
    window.location = "?user=" + $("#user").html() + "&dice=" + $("#dice").html() + "&random" + document.location.hash;
}

function MonteCarlo() {
    window.location = "?user=" + $("#user").html() + "&dice=" + $("#dice").html() + "&montecarlo=100000" + document.location.hash;
}

function RollNormal() {
    window.location = "?user=" + $("#user").html() + "&dice=" + $("#dice").html() + "&" + document.location.hash;
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
    $("#spinner").hide();
    $("#total").hide();

    // Regularly fetch others dice rolls
    setInterval(function () {
        var basePath = $("#baseURL").text();
        var path = $(location).attr('pathname');
        var result = path.split('/');
        var room = result[result.length - 1];
        var user = $('#user').text();
        if (basePath != '') {
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
        }
    }, 3000);
});
