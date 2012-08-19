exports.name = '/punchdp';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        // 4e132721a3f75114de033e4b is DJ Danger Princess
        // Is DP in room?
        var DPisHere = false;
        for (i in usersList) {
            if (i == '4e132721a3f75114de033e4b') {
                DPisHere = true;
            }
        }
        if (DPisHere) {
            bot.speak('/me punches DP');
        }
        else {
            output({text: 'DP is not here', destination: data.source, userid: data.userid});
        }
    }
}
