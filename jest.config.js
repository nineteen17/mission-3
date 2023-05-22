/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/server/src'],
  testEnvironment: 'node',
  preset: 'ts-jest'
};
