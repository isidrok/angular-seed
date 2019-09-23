exports.config = {
  tests: '../../client/*/e2e/**/*.test.js',
  output: '../../logs/e2e',
  helpers: {
    Protractor: {
      url: 'http://localhost:8080',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: true
    }
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'e2e'
}
