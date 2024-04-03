module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'], 
    transformIgnorePatterns: [
        "node_modules/(?!troublesome-dependency/.*)",
    ]
}