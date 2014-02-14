modules.create('helloWorld', function (require, p) {
    var logger = require('logger'),
        template = require.template('message');

    p.sayToWorld = function (say) {
        return say + ' world!';
    }

    return {
        hello: function () {
            var message = p.sayToWorld('Hello');
            logger.log(message);
            return template({message: message});
        }
    }
});