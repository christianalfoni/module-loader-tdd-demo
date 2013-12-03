require('module-loader-tdd')
modules.initialize(function (require) {


    var express = require('express');

    var app = express();
    var moduleFinder = require('./server/modules/moduleFinder');
    app.set('view engine', 'hbs');
    app.set('views', __dirname + '/server/templates');
    app.use('/vendors', express.static(__dirname + '/client/vendors'));
    app.use('/js', express.static(__dirname + '/client/app'));
    app.use('/templates', express.static(__dirname + '/client/templates'));
    app.get('/', function(req, res){

        moduleFinder.findAll(function (files) {
            res.render('index', {
                sourceFiles: files
            });
        });

    });

    app.listen(3000);
    console.log('listening to localhost:3000');
});