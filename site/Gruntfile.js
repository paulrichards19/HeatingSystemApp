module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            build: {
                options: {
                    baseUrl: "public/js",
                    mainConfigFile: "public/js/main.js",
                    wrap: true,
                    name: "almond",
                    out: "build/js/optimized.js",
                    findNestedDependencies: true,


                    include: ["main"]
                }
            }
        },

        uglify: {
            build: {
                options: {
                    sourceMap: true,
                    report: 'gzip'
                },
                files: {
                    'build/js/optimized.min.js': ['build/js/optimized.js']
                }
            }
        },

        less: {
            build: {
                options: {
                    paths: ["public/css/"]
                },
                files: {
                    "public/css/styles.css": "public/css/styles.less"
                }
            }

        },

        cssmin: {
            build: {
                options: {
                    sourceMap: true,
                    rebase: false,
                    report: 'gzip'
                },

                files: {
                    'build/css/styles.min.css': [ 'public/css/styles.css']
                }

            }
        },

        watch: {
            dev: {
                files: ['public/css/*.less'], // which files to watch
                tasks: ['less:build'],
                options: {
                    nospawn: true
                }
            }
        },

        copy: {
            build: {
                files: [
                    { expand: true, cwd: 'public/', src: ['fonts/**'], dest: 'build/'},
                    { expand: true, cwd: 'public/', src: ['img/**'], dest: 'build/'},
                    { expand: true, src: ['build/**'], dest: 'public/'},
                    { expand: true, cwd: 'build/', src: ['**'], dest: '../heatingcontrolapp/www/'}
                    //{ expand: true, cwd: 'build/', src: ['**'], dest: '../webviewapp2/app/src/main/assets/app/'}
                ]
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['requirejs:build','uglify:build','less:build','cssmin:build','copy:build']);
    grunt.registerTask('buildless', ['watch:dev']);

};