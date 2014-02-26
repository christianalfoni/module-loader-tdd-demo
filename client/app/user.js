modules.create('user', function (require, p, resource) {
    var user = {
        name: 'bilbo'
    };
    resource.register('user', function () {
        return user;
    });

    return {};

});