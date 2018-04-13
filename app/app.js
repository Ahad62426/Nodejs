var express = require ('express'),
      port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
      ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '127.0.1.168',
      app = express();
      //reload = require('reload');

//View engine
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(require('./routes/index'));
app.use(require('./routes/data'));
app.use(require('./routes/files'));
app.use(require('./routes/form'));
app.use(require('./routes/api'));
//Set static path
app.use(express.static('app/public'));

var server= app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

//reload(server, app);
