exports.name = 'djinfo';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (config.enforcement.enforceroom) {
        var response = '';
        for (i in djs) {
            response += usersList[djs[i].id].name + ' (' + djs[i].remaining + ' song'
                + ((djs[i].remaining == 1 || djs[i].remaining == -1) ? 's' : '') + ' left), ';
        }
    } else {
        var response = '';
        for (i in djs) {
            response += usersList[djs[i].id].name + ' (played ' + djs[i].remaining + '), ';
        }
    }
    output({text: response.substring(0, response.length - 2), destination: data.source, userid: data.userid});
}