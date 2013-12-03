module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', 'Backbone', '_', '$']
                }
            },
            build: {
                files: {
                    'dist/demo.min.js': [
                        'client/vendors/underscore.js',
                        'client/vendors/jquery-1.10.2.js',
                        'client/vendors/backbone.js',
                        'client/vendors/module-loader.js',
                        'client/app/*.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};