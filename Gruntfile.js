module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: ['bootstrap3-typeahead.js']
    },
	jscs: {
		src: "bootstrap3-typeahead.js",
		options: {
			config: ".jscsrc",
		}
	},
    uglify: {
      options: {
        preserveComments: 'some'
      },
      core: {
      files: {
        'bootstrap3-typeahead.min.js': ['bootstrap3-typeahead.js']
      }
	  }
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  //require('time-grunt')(grunt);
  grunt.registerTask('test', ['jshint', 'jscs']);
  
  // Default task.
  grunt.registerTask('default', ['test','uglify']);

};
