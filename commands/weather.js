exports.name = '.weather';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = true;
exports.handler = function(data) {
    var userlocation = data.text.substring(9);
    if (userlocation == '') {
        userlocation = 20151;
    }
    
    request('http://www.google.com/ig/api?weather=' + encodeURIComponent(userlocation),
        function cb(error, response, body) {
        parser.parseString(body, function(err, result) {
            if (result.weather.forecast_information != null) {
                try {
                    var rp = 'The weather in ' 
                        + result.weather.forecast_information.city['@'].data
                        + ' is ' + result.weather.current_conditions.temp_f["@"].data
                        + '°F and ' + result.weather.current_conditions.condition["@"].data
                        + ' (' + result.weather.current_conditions.wind_condition["@"].data
                        + ', ' + result.weather.current_conditions.humidity["@"].data
                        + ').';
                    output({text: rp, destination: data.source, userid: data.userid});
                } catch (e) {
                    output({text: 'An error occurred.', destination: data.source, userid: data.userid});
                }
            } else {
                output({text: 'Sorry, I can\'t find that location.',
                    destination: data.source, userid: data.userid});
            }
        });
    });
}