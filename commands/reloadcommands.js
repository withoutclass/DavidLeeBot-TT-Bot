//Reloads commands from the ./commands/ folder.

exports.name = '.reloadcommands';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        reloadCommands(data);
    }
}