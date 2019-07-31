{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":39,"column":0},"action":"remove","lines":["var port = process.env.PORT || 3000,","    http = require('http'),","    fs = require('fs'),","    html = fs.readFileSync('index.html');","","var log = function(entry) {","    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\\n');","};","","var server = http.createServer(function (req, res) {","    if (req.method === 'POST') {","        var body = '';","","        req.on('data', function(chunk) {","            body += chunk;","        });","","        req.on('end', function() {","            if (req.url === '/') {","                log('Received message: ' + body);","            } else if (req.url = '/scheduled') {","                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);","            }","","            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});","            res.end();","        });","    } else {","        res.writeHead(200);","        res.write(html);","        res.end();","    }","});","","// Listen on port 3000, IP defaults to 127.0.0.1","server.listen(port);","","// Put a friendly message on the terminal","console.log('Server running at http://127.0.0.1:' + port + '/');",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":59,"column":0},"action":"insert","lines":["","/**"," * Module dependencies."," */","","// Client","  // Server","  var log = console.log;","","var express = require('express');","","var app = module.exports = express.createServer();","","// Configuration","","app.configure(function(){","  app.set('views', __dirname + '/views');","  app.set('view engine', 'ejs');","  app.use(express.bodyParser());","  app.use(express.methodOverride());","  app.use(express.cookieParser());","  app.use(express.session({ secret: 'your secret here' }));","  app.use(app.router);","  app.use(express.static(__dirname + '/public'));","});","","app.configure('development', function(){","  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); ","});","","app.configure('production', function(){","  app.use(express.errorHandler()); ","});","","// Routes","","app.get('/', function(req, res){","  res.render('index', {","    title: 'Express'","  });","});","","app.listen(3000);","console.log(\"Express server listening on port %d in %s mode\", app.address().port, app.settings.env);","","var io = require('socket.io').listen(app);","","","io.sockets.on('connection', function (socket) { // 2","  log('connected');","  socket.on('msg send', function (msg) { // 4","    socket.emit('msg push', msg); // 5","    socket.broadcast.emit('msg push', msg); // 6","  });","  socket.on('disconnect', function() { // 9","    log('disconnected');","  });","});","",""]}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":30},"action":"remove","lines":["","/**"," * Module dependencies."," */","","// Client","  // Server","  var log = console.log;","","var express = require('express"],"id":3,"ignore":true},{"start":{"row":0,"column":0},"end":{"row":6,"column":41},"action":"insert","lines":["var createError = require('http-errors');","var express = require('express');","var path = require('path');","var cookieParser = require('cookie-parser');","var logger = require('morgan');","","var indexRouter = require('./routes/index"]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""]},{"start":{"row":7,"column":4},"end":{"row":12,"column":2},"action":"remove","lines":["app = module.exports = express.createServer();","","// Configuration","","app.configure(function(){","  "]},{"start":{"row":7,"column":4},"end":{"row":12,"column":0},"action":"insert","lines":["usersRouter = require('./routes/users');","","var app = express();","","// view engine setup",""]},{"start":{"row":12,"column":17},"end":{"row":12,"column":27},"action":"insert","lines":["path.join("]},{"start":{"row":12,"column":36},"end":{"row":12,"column":38},"action":"remove","lines":[" +"]},{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"insert","lines":[","]},{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"remove","lines":["/"]},{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":[")"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":24},"end":{"row":13,"column":27},"action":"remove","lines":["ejs"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":28},"action":"insert","lines":["jade"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":8},"end":{"row":15,"column":27},"action":"remove","lines":["express.bodyParser("]},{"start":{"row":15,"column":8},"end":{"row":15,"column":20},"action":"insert","lines":["logger('dev'"]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":16},"end":{"row":16,"column":30},"action":"remove","lines":["methodOverride"]},{"start":{"row":16,"column":16},"end":{"row":16,"column":20},"action":"insert","lines":["json"]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":16},"end":{"row":18,"column":54},"action":"remove","lines":["cookieParser());","  app.use(express.session({ secret: 'your secret here'"]},{"start":{"row":17,"column":16},"end":{"row":17,"column":44},"action":"insert","lines":["urlencoded({ extended: false"]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":8},"end":{"row":18,"column":18},"action":"remove","lines":["app.router"]},{"start":{"row":18,"column":8},"end":{"row":18,"column":22},"action":"insert","lines":["cookieParser()"]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":23},"end":{"row":19,"column":33},"action":"insert","lines":["path.join("]},{"start":{"row":19,"column":42},"end":{"row":19,"column":44},"action":"remove","lines":[" +"]},{"start":{"row":19,"column":42},"end":{"row":19,"column":43},"action":"insert","lines":[","]},{"start":{"row":19,"column":45},"end":{"row":19,"column":46},"action":"remove","lines":["/"]},{"start":{"row":19,"column":54},"end":{"row":20,"column":1},"action":"remove","lines":[";","}"]},{"start":{"row":21,"column":4},"end":{"row":26,"column":31},"action":"remove","lines":["configure('development', function(){","  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); ","});","","app.configure('production', function(){","  app.use(express.errorHandler("]},{"start":{"row":21,"column":4},"end":{"row":26,"column":22},"action":"insert","lines":["use('/', indexRouter);","app.use('/users', usersRouter);","","// catch 404 and forward to error handler","app.use(function(req, res, next) {","  next(createError(404"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"remove","lines":[" "]},{"start":{"row":29,"column":3},"end":{"row":31,"column":13},"action":"remove","lines":["Routes","","app.get('/', "]},{"start":{"row":29,"column":3},"end":{"row":30,"column":8},"action":"insert","lines":["error handler","app.use("]},{"start":{"row":30,"column":17},"end":{"row":30,"column":22},"action":"insert","lines":["err, "]},{"start":{"row":30,"column":30},"end":{"row":43,"column":18},"action":"remove","lines":["){","  res.render('index', {","    title: 'Express'","  });","});","","app.listen(3000);","console.log(\"Express server listening on port %d in %s mode\", app.address().port, app.settings.env);","","var io = require('socket.io').listen(app);","","","io.sockets.on('connection', function (socket) { // 2","  log('connected')"]},{"start":{"row":30,"column":30},"end":{"row":33,"column":68},"action":"insert","lines":[", next) {","  // set locals, only providing error in development","  res.locals.message = err.message;","  res.locals.error = req.app.get('env') === 'development' ? err : {}"]},{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":2},"end":{"row":43,"column":0},"action":"remove","lines":["socket.on('msg send', function (msg) { // 4","    socket.emit('msg push', msg); // 5","    socket.broadcast.emit('msg push', msg); // 6","  });","  socket.on('disconnect', function() { // 9","    log('disconnected');","  });","});",""]},{"start":{"row":35,"column":2},"end":{"row":40,"column":21},"action":"insert","lines":["// render the error page","  res.status(err.status || 500);","  res.render('error');","});","","module.exports = app;"]}],[{"start":{"row":0,"column":0},"end":{"row":41,"column":0},"action":"remove","lines":["var createError = require('http-errors');","var express = require('express');","var path = require('path');","var cookieParser = require('cookie-parser');","var logger = require('morgan');","","var indexRouter = require('./routes/index');","var usersRouter = require('./routes/users');","","var app = express();","","// view engine setup","app.set('views', path.join(__dirname, 'views'));","app.set('view engine', 'jade');","","app.use(logger('dev'));","app.use(express.json());","app.use(express.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","app.use('/', indexRouter);","app.use('/users', usersRouter);","","// catch 404 and forward to error handler","app.use(function(req, res, next) {","  next(createError(404));","});","","// error handler","app.use(function(err, req, res, next) {","  // set locals, only providing error in development","  res.locals.message = err.message;","  res.locals.error = req.app.get('env') === 'development' ? err : {};","","  // render the error page","  res.status(err.status || 500);","  res.render('error');","});","","module.exports = app;",""],"id":4},{"start":{"row":0,"column":0},"end":{"row":24,"column":36},"action":"insert","lines":["var http = require('http');","var settings = require('./settings');","var server = http.createServer();","","var msg;","server.on('request',function(req,res){","    ","    switch (req.url){","        case '/about':","            msg = \"About - about this web site\"","            break;","        case '/profile':","            msg = \"Profile - about me.\"","            break;","        default:","            msg = 'Wrong Page - please check URL.';","            break;","    }","    ","    res.writeHead(200, {'Content-Type': 'text/plain'});","    res.write(msg);","    res.end();","});","server.listen(settings.port,settings.host);","console.log(\"server listening ...\");"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":18},"end":{"row":16,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1564562946594,"hash":"df30b257a8eaaefa6a91f789d4017df49ec17668"}