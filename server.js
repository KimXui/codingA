const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('서버가시작되었습니다.');

});

app.get('/pet', function(req, res){
    res.send('펫용품사이트');
});

app.get('/beuty', function(req, res){
    res.send('펫품사이트');
});

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html')
});