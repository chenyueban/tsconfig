module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: true,
}
