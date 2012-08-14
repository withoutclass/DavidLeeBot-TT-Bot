exports.name = '.pilgrim';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (config.database.usedb) {
        client.query('SELECT * FROM SCOTT_PILGRIM ORDER BY RAND() LIMIT 1',
            function selectCb(error, results, fields) {
                if (results[0] != null) {
                    var response = (results[0]['quote']);
                    output({text: response, destination: data.source, userid: data.userid});
                }
        });
    }
}