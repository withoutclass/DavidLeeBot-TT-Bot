//Tell bot to step up

exports.name = '!up';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        botStartDJ();
    }
}