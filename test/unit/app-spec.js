var assert = require('assert');

describe('App', function() {
    describe('Start function', function() {
        it('should return "App Started"', function() {
            var app = require('../../src/app');

            var returnValue = app.start();

            assert.equal('App Started', returnValue);
        });
    });
});