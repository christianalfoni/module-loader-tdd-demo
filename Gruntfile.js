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
        },
        tdd: {
            browser: {
                files: {
                    sources: ['client/app/**/*.js'], // The source files of the project
                    libs: [
                        'client/vendors/jquery-1.10.2.js',
                        'client/vendors/handlebars-v1.1.2.js',
                        'client/vendors/module-loader-tdd.js'
                    ] // Any libs to load first
                },
                options: {
                    testsPath: 'client/tests/', // Where are your tests located?
                    port: 3001 // Port to show tests, defaults to 3001
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-buster-tdd');

    // Default task(s).
    grunt.registerTask('deploy', ['uglify']);
    grunt.registerTask('default', ['tdd:browser']);

};