module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'],
   moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
