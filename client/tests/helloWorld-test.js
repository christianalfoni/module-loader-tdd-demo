modules.test('helloWorld', function (helloWorld, p, deps, resource) {
    'use strict';
    var assert = buster.assert;
    buster.testCase('helloWorld test', {
        setUp: function () {
            resource.register('user', function () {
               return {
                   name: 'jack'
               }
            });
        },
        'hello()': {
            'is a function': function () {
                assert.isFunction(helloWorld.hello);
            },
            'calls dependency with message': function () {
                helloWorld.hello();
                // Deps are stubbed methods (Sinon JS), which lets us verify their usage
                // without actually executing the code
                assert(deps.logger.log.calledOnce); // Has the log method been called?
                assert(deps.logger.log.calledWith('jack says: Hello world!')); // Was it called with the expected message?
            }
        },
        'p.sayToWorld()': {
            'is a function': function () {
                assert.isFunction(p.sayToWorld);
            },
            'returns passed argument with " world!" appended to the string': function () {
                assert.equals(p.sayToWorld('Hello'), 'Hello world!');
                assert.equals(p.sayToWorld('Good evening'), 'Good evening world!');
            }
        }
    });
});