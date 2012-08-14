//Tells bot to snag the current song

exports.name = '.q';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        snagSong();
    }
}