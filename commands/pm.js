//Tell bot to PM you

exports.name = '/pm';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (data.source == 'speak') {
        bot.pm('Hey there! Type "commands" for a list of commands.', data.userid);
    } else if (data.source == 'pm') {
        bot.pm('But... you PM\'d me that. Do you think I\'m stupid? >:T', data.userid);
    }
}