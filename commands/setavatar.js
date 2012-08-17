exports.name = 'setavatar';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = true;
exports.handler = function(data) {
    if (data.userid === config.admin) {
        bot.setAvatar(data.text.substring(10));
    }
}