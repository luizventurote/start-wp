// This shows a full config file!
module.exports = function (grunt) {

    // IP
    var ip_project = "";
  
    grunt.initConfig({

        // Read package json
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            
          build: {
            files: ['**/*.js', '**/*.scss', '**/*.html', '**/*.php'],
            tasks: ['concat', 'uglify', 'sass', 'concat:css', 'cssmin'],
            options: {
              spawn: false,
            },
          },

          struct: {
            files: ['**/*.html', '**/*.php'],
            options: {
              spawn: false,
            },
          },

          sass: {
            files: ['**/*.scss', '**/*.html', '**/*.php'],
            tasks: ['sass', 'concat:css', 'cssmin'],
            options: {
              spawn: false,
            },
          },

          js: {
            files: ['**/*.js', '**/*.html', '**/*.php'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
          },

        }, // watch

        sass: {                            
          dist: {               
            options: {                    
              style: 'expanded'
            },
            files: {                  
              'assets/css/cache-style.css': 'assets/build/scss/style.scss'
            }
          }
        }, // sass

        concat: {
          options: {
            separator: '\n\n\n'
          },
          js: {
            src: ['assets/build/js/lib/**/*.js', 'assets/build/js/elements/**/*.js'],
            dest: 'assets/js/main.js'
          },
          css: {
            src: ['assets/build/css/**/*.css', 'assets/css/cache-style.css'],
            dest: 'assets/css/style.css'
          }
        }, // concat

        uglify: {
          options: {
            banner: '/*! Want to know more about it? Access the file js/main.js ;) */\n'
          },
          build: {
            src: 'assets/js/main.js',
            dest: 'assets/js/main.min.js'
          }
        }, // uglify

        cssmin: {
          add_banner: {
            options: {
              banner: '/* Want to know more about it? Access the file css/style.css ;) */'
            },
            files: {
              'assets/css/style.min.css': ['assets/css/style.css']
            }
          }
        }, // cssmin

        clean: {
          // Deletes files generated in the project construction
          project: {
            src: ['assets/js/main.js', 'assets/js/main.min.js', 'assets/css/style.css', 'assets/css/style.min.css']
          },
          // Deletes css files generated in the project construction
          sass: {
            src: ['assets/css/cache-style.css', '.sass-cache']
          }
        }, // clean

        copy: {
          main: {
            src: 'src/*',
            dest: 'dest/',
          },
        }, // copy
        
        browser_sync: {
            dev: {
                files: {
                    src : [
                        'css/*.css',
                        'img/**/*.jpg',
                        'img/**/*.png',
                        'js/**/*.js',
                        '**/*.php',
                        '**/*.html'
                    ]
                },
                options: {

                  // Defining an IP manually
                  host : ip_project,

                  // Half of the gates
                  // ports: {
                  //     min: 3000,
                  //     max: 3002
                  // },

                  // Assigning a base directory
                  // server: {
                  //     baseDir: "."
                  // },

                  // Recharges when the css is changed
                  injectChanges: false,

                  // Integrating with the "watch" task
                  watchTask: true,

                  // Synchronizing events between devices
                  ghostMode: {
                      clicks: true,
                      scroll: true,
                      links: true,
                      forms: true
                  }
                },
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // create custom task-list
    grunt.registerTask('default', ["concat", "uglify", "sass", "concat:css", "cssmin", "clean:sass"]);
    grunt.registerTask('wdev', ["browser_sync", "watch:build"]);
    grunt.registerTask('wstruct', ["browser_sync", "watch:struct"]);
    grunt.registerTask('wsass', ["browser_sync", "watch:sass"]);
    grunt.registerTask('wjs', ["browser_sync", "watch:js"]);
};