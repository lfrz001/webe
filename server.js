var express = require('express');
var app = express();
var testt;
app.use(express.static('public'));
console.log(__dirname);
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(18080;, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)

})
