module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    '/css/bootstrap.css': 'bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss',       // 'destination': 'sourc
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['jshint']);

};