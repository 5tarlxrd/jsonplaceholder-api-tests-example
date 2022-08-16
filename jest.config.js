/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-junit',
      {
        suiteName: 'jsonplaceholder-api-tests',
        outputDirectory: './reports',
        outputName: 'jsonplaceholder-api-tests.xml',
        uniqueOutputName: 'false',
        classNameTemplate: '{filename}',
        titleTemplate: '{title}',
        suiteNameTemplate: '{filepath}'
      }],
    ['./node_modules/jest-html-reporter',
      {
        'pageTitle': 'API tests example for JSONPlaceholder (https://jsonplaceholder.typicode.com/)',
        'outputPath': './reports/index.html'
      }]
  ],
  verbose: true
};