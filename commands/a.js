exports.name = '.a';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        if (currentsong.djid == data.userid) {
            output({text: "You can't awesome yourself!", destination: data.source,
                    userid: data.userid});
            }
        else {
            bot.vote('up');
        }
    }
}