const globToRegExp = require('glob-to-regexp');
const { testConfigFactory } = require('@mv/builder');

function makeGrepRegExp(grep = '*.spec.ts') {
  return globToRegExp(`**/${grep}`, { globstar: true });
}

module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'tests.ts'
    ],
    preprocessors: {
      'tests.ts': ['webpack']
    },
    webpack: testConfigFactory({
      grep: makeGrepRegExp(config.grep)
    }),
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
