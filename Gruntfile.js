module.exports = function(grunt) {

    grunt.initConfig({
        compass: {                              // Task
            dist: {                            // Target
                options: {
                    sassDir: 'css',
                    cssDir: 'css',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['jshint']);

};