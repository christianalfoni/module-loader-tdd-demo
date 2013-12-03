require('module-loader-tdd');

var buster = require('buster'),
    assert = buster.assert;

modules.test('./../modules/moduleFinder', function (moduleFinder, p, deps) {

    buster.testCase('Just a test', {
        'has findAll function': function () {
            assert.isFunction(moduleFinder.findAll)
        },
        'has an empty array': function () {
            assert(p.sourceFiles instanceof Array);
        },
        'check if path is a dependency': function () {
            assert.isObject(deps.path);
        }
    });

});