modules.create('helloWorld', function (require, p, resource) {
    var logger = require('logger'),
        template = require.template('message');

    p.sayToWorld = function (say) {
        return say + ' world!';
    }

    return {
        hello: function () {
            var  user = resource.fetch('user'),
                message = user.name + ' says: ' + p.sayToWorld('Hello');

            logger.log(message);
            return template({message: message});
        }
    }
});