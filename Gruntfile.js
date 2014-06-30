module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      files: ['index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
}