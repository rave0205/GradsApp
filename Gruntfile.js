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
				base: './app/',
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
				keepAlive: false
			},
			run: {
				options: {
					configFile: "./test/protractor.conf.js",
					args: {
						baseUrl: 'http://localhost:8888/',
						specs: ['./test/web/et/*ET.js'],
						browser: 'chrome'
					}
				}
			},
			mockedRun: {
				options: {
					configFile: "./test/protractor.conf.js"
				}
			}
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
	grunt.registerTask('test:e2e', ['connect:testserver', 'protractor:singlerun']);

	grunt.registerTask('test:e2e:mocked', ['install', 'connect:testserver', 'protractor:mockedRun']);
	grunt.registerTask('test:e2e', ['install', 'protractor:run']);

	//installation
	grunt.registerTask('install', ['shell:npm_install', 'shell:protractor_install']);

};