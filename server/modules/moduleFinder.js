modules.create(function (require, p) {
    'use strict';
    var path = require('path');
    var readdir = require('recursive-readdir');

    p.sourceFiles = [];

    return {
        findAll: function (callback) {
            // Read all project specific files
            readdir('client/app', function (err, files) {
                // Files is an array of filename
                files.forEach(function (filePath, index) {
                    if (filePath.match(/\.js/)) {
                        p.sourceFiles.push(path.basename(filePath));
                    }
                });
                callback(p.sourceFiles);
            });
        }
    }
});