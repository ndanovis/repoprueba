var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            testing: {
                src: ['_site_testing']
            },
            production: {
                src: ['_site_production']
            }
        },

        jekyll: {
            testing: {
                options: {
                    dest:'./_site_testing',
                    config: '_config.testing.yml'
                }
            },
            production: {
                options: {
                    dest:'./_site_production',
                    config: '_config.production.yml'
                }
            }
        },

        zip: {
            testing: {
                src: ['_site_testing/**'],
                dest: './iway_practices_testing_<%= pkg.version %>.testing.zip'
            },
            production: {
                src: ['_site_production/**'],
                dest: './iway_practices_testing_<%= pkg.version %>.production.zip'
            }
        }
    });

    // Where we tell Grunt we plan to use some plug-ins.
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-zip');

    grunt.registerTask('testing', ['clean:testing', 'jekyll:testing', 'zip:testing', 'clean:testing']);
    grunt.registerTask('production', ['clean:production', 'jekyll:production', 'zip:production', 'clean:production']);

};
