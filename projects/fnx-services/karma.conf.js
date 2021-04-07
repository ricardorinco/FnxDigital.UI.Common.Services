module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        reporters: ['progress', 'coverage', 'junit', 'sonarqubeUnit', 'kjhtml'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('karma-junit-reporter'),
            require('karma-sonarqube-unit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false,
            jasmine: {
                random: false
            }
        },
        jasmineHtmlReporter: {
            suppressAll: true
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './../../dist/coverage-reports/coverage'),
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                { type: 'text-summary', subdir: 'report-text-summary' },
                { type: 'cobertura', subdir: 'report-cobertura' }
            ],
            check: {
                globals: {
                    statements: 80,
                    lines: 80,
                    branches: 80,
                    functions: 80
                },
                each: {
                    statements: 80,
                    lines: 80,
                    branches: 80,
                    functions: 80
                }
            }
        },
        sonarQubeUnitReporter: {
            sonarQubeVersion: 'LATEST',
            outputFile: './../../dist/coverage-reports/sonarqube/ut_report.xml',
            overrideTestDescription: true,
            testPaths: ['./projects/fnx-services/src'],
            testFilePattern: '.spec.ts',
            useBrowserName: false
        },
        junitReporter: {
            outputDir: require('path').join(__dirname, './../../dist/coverage-reports/junit')
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true
    });
};
