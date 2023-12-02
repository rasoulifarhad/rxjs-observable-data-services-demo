var express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser');
var _ = require('lodash');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var app = express();

var todos = [];

app.use(express.static('.'));
app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.text());

app.route('/todos')
    .get((req, res) => {
        console.log(JSON.stringify(todos));
        res.send(todos);
    })
    .put((req, res) => {
        var json = req.body;
        var toggled = _.find(todos, (todo) => todo.id == json.id);
        toggled.completed = !toggled.completed;
        console.log(JSON.stringify(todos));
        res.send();
    })
    .delete((req,res) => {
        console.log('removing todo with id = ' + req.query.id);
        todos = _.remove(todos,(todo) => todo.id != req.query.id );
        console.log(JSON.stringify(todos));
        res.send();
    })
    .post((req, res) => {
        todos.push(req.body);
        console.log(JSON.stringify(todos));
        setTimeout(() => res.send(), 1000);
    });

app.all('/bundle.js', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8081'
    });
});

var server = app.listen(8081, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});
