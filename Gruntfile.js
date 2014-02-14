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
                        'client/vendors/module-loader-tdd.js'
                    ], // Any libs to load first
                    tests: ['client/tests/**/*-test.js']
                },
                options: {
                    runner: 'buster',
                    expect: true,
                    sinon: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-tdd');

    // Default task(s).
    grunt.registerTask('deploy', ['uglify']);

};