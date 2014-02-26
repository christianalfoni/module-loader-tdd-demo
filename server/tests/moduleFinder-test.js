modules.test('./../modules/moduleFinder', function (moduleFinder, p, deps, resource) {

    module.exports = buster.testCase('Just a test', {
        'has findAll function': function () {
            expect(moduleFinder.findAll).to.be.a('function');
        },
        'has an empty array': function () {
            expect(p.sourceFiles).to.be.an(Array);
        },
        'check if path is a dependency': function () {
            expect(deps.path).to.be.an('object');
        },
        TESTS: {
            'just testing': function () {
                expect(true).to.be(true);
            }
        }
    });

});