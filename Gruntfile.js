'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('assemble');
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    config: {
      src: 'src',
      dist: '.'
    },
    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      sass: {
        files: ['<%= config.src %>/scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csso']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.html',
          'assets/{,*/}*.css',
          'assets/{,*/}*.js',
          'assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/pure/pure-min.css'], dest: 'assets/css/'}
        ]
      }
    },
    sass: {
      dist: {
        files: {
          'assets/css/main.css': '<%= config.src %>/scss/main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      concat: {
        src: ['assets/css/*.css', '!assets/css/milanojs.css', '!assets/css/milanojs.min.css'],
        dest: 'assets/css/milanojs.css'
      }
    },
    csso: {
      compress: {
        files: {
          'assets/css/milanojs.min.css': ['assets/css/milanojs.css']
        }
      }
    },
    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: 'assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          plugins: ['assemble-contrib-anchors','assemble-contrib-permalinks','assemble-contrib-sitemap','assemble-contrib-toc','assemble-markdown-data']
        },
        files: {
          '.': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },
    clean: ['**/*.{html,xml}']
  });

  grunt.registerTask('server', [
    'clean',
    'assemble',
    'copy',
    'sass',
    'autoprefixer',
    'csso',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
