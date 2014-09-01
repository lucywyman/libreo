module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'static/css/style.css' : 'static/css/style.scss'
        }
      }
    }

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
