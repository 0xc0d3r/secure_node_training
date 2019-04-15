var request = require('request');

//do GET request, getting the package for the email=user@client.com
function doGET() {
    request.get({
        uri: 'http://localhost:3800/api/v1/storage?sendCompressed=true&email=user@client.com&resource=hello.txt',
        headers: {
            'client_id': 'id_x',
            'password': 'bigWombat'
        }
    }, function (err, res) {
        console.log(res.body);
    });
}

doGET();
