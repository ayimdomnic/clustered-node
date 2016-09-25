module.exports = function(grunt) {
    // Project configuration.
    // Project Infectiated by new servers
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                node: true
            },
            all: ['Gruntfile.js', 'lib/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['jshint']);

};