'use strict';

var grunt = require('grunt');
var should = require('should');
var spawn = require('win-spawn');

describe('Task: ddescribe-iit', function () {
  it('should report multiple errors', function (done) {
    this.timeout(10000);

    var gruntProcess = spawn('grunt', ['prevent-debugger'], {
      cwd: __dirname + '/..',
    });

    var output = '';
    gruntProcess.stderr.on('data', function (data) {
      output += data;
    });
    gruntProcess.stdout.on('data', function (data) {
      output += data;
    });

    gruntProcess.on('close', function (code) {
      if (code === 0) {
        done(new Error('The grunt process did not fail as expected'));
        return;
      }

      should(output.split('\n').filter(function (line) {
        console.log(line);
        return line.indexOf('at line') > -1;
      })).have.lengthOf(2);

      done();
    });
  });

});
