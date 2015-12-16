'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadTasks('tasks');

  grunt.initConfig({
    jshint: {
      all: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: [
            'Gruntfile.js',
            'lib/*.js',
            'tasks/*.js',
          ]
        }
      },
      tests: {
        options: {
          jshintrc: 'tests/.jshintrc'
        },
        files: {
          src: [
            'tests/*.js'
          ]
        }
      }
    },
    release : {
      options : {
        changelog : true
      }
    },
    'prevent-debugger': {
      all: {
        src: [
          'tests/fixtures/*.js'
        ]
      }
    },

    mochacli: {
      options: {
        require: ['should'],
        bail: true
      },
      all: ['tests/*.js']
    },
  });

  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint', 'mochacli']);
};
