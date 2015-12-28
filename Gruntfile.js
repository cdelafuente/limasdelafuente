module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'web/styles/sass/pages',
          src: ['*.scss'],
          dest: 'web/styles/css',
          ext: '.css'
        }]
      },
      prod: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'web/styles/sass/pages',
          src: ['*.scss'],
          dest: 'web/styles/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: 'web/styles/sass/**/*.scss',
        tasks: ['sass:prod']
      }
    }
  });

  // Register sass task
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);

  // Register watch task
  grunt.loadNpmTasks('grunt-contrib-watch');
};
