module.exports = function(grunt) {
	grunt.initConfig({
		shell: {
			options: {
				stdout: true
			},
			protractor_install: {
				command: 'node ./node_modules/protractor/bin/webdriver-manager update',
				command: 'node ./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update'
			},
			npm_install: {
				command: 'npm install'
			}
		},
		connect: {
			options: {
				base: 'app/',
				hostname: 'localhost'
			},
			webserver: {
				options: {
					port: 8888
				}
			},
			testserver: {
				options: {
					port: 9999
				}
			},
			//used to see coverage reports create by karma-coverage
			coverage: {
				options: {
					base: 'coverage/',
					port: 5555,
					keepalive:true
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				livereload: 35729
			},
			scripts: {
				files: ['app/**'],
				//tasks: ['jshint'],
				options: {
					spawn: false
				}
			}
		},
		open: {
			devserver: {
				path: 'http://localhost:8888',
				app: 'chrome'
			},
			coverage: {
				path: 'http://localhost:5555',
				app: 'chrome'
			}
		},

		karma: {
			unit: {
				configFile: './test/karma.conf.js',
				autoWatch: false,
				singleRun: true
			},
			unit_coverage: {
				configFile: './test/karma.conf.js',
				autoWatch: false,
				singleRun: true,
				reporters: ['progress', 'coverage'],
				preprocessors: {
					'app/**/*.js': ['coverage']
				},
				coverageReporter: {
					type : 'html',
					dir : 'coverage/'
				}
			}
		},
		protractor: {
			options: {
				keepAlive: true,
				configFile: "./test/protractor.conf.js"
			},
			singlerun: {}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-shell-spawn');


	grunt.registerTask('serve', ['connect:webserver']);
	grunt.registerTask('default', ['connect:webserver', 'open:devserver', 'watch']);

	//tests
	//used for running unit tests
	grunt.registerTask('test:unit', ['karma:unit']);
	grunt.registerTask('test:unit_coverage', ['karma:unit_coverage', 'open:coverage', 'connect:coverage']);
	grunt.registerTask('test:e2e', ['connect:testserver', 'protractor:singlerun']);

	//installation
	grunt.registerTask('install', ['shell:npm_install', 'shell:protractor_install']);

};