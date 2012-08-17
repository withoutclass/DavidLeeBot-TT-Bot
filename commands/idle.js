//Shows idle times of DJs

exports.name = '!idle';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
	var response = '';
	for (i = 0; i < djs.length; i++) {
		response += usersList[djs[i].id].name + ': ' + AFKTime(djs[i].id) + ', ';
	}
	output({text: response.substring(0, response.length - 2), destination: data.source, userid: data.userid});
}