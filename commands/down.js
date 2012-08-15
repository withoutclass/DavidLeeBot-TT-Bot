// Tell bot to step down

exports.name = '!down';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        bot.remDj(config.botinfo.userid);
    }
}