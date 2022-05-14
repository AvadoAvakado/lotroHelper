const express = require('express');

const app = express();

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/pages/mainPage.html');
});
app.get(/.*\.png$/, function(request, response) {
    response.sendFile(__dirname + '/resources/' + request.url);
})

app.get('/resources/page.js' ,function(request, response) {
    response.sendFile(__dirname + '/resources/page.js');
})

app.listen(3000);