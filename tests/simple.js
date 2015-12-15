'use strict';

var should = require('should');

var checkFile = require('../tasks/lib/check-file');
var defaultDisallowed = require('../tasks/lib/default-disallowed');

describe('check-file', function () {

  it('should return undefined if there are no problems', function () {
    should.not.exist(checkFile("it('is a-ok')", defaultDisallowed));
  });

  it('should return an array if there is `debugger;`', function () {
    should.exist(checkFile("debugger; console.log('is not a-ok')", defaultDisallowed));
  });

  it.skip('should report multiple errors', function () {
    should(checkFile("debugger; \n\n console.log('is not a-ok'); debugger; console.error('is not a-ok')", defaultDisallowed)).have.lengthOf(2);
  });

  it('should give the line number of the problem', function () {
    var problems = checkFile("debugger; ddescribe('is not a-ok')", defaultDisallowed);
    problems.length.should.equal(1);
    should.equal(problems[0].line, 1);

    problems = checkFile("\n\ndebugger;\nconsole.log('is not a-ok')", defaultDisallowed);
    problems.length.should.equal(1);
    should.equal(problems[0].line, 3);

    problems = checkFile("\n\n\n\n\ndebugger; console.log('is not a-ok')", defaultDisallowed);
    problems.length.should.equal(1);
    should.equal(problems[0].line, 6);
  });

  it('can use cutom disallowed keywords', function () {
	  should.not.exist(checkFile("xit('is a-ok to use custom disallowed keywords')", ["iit", "ddescribe"]));
  });

  it('passes if there are no disallowed keywords', function () {
	  should.not.exist(checkFile("xit('is a-ok to use custom disallowed keywords')"));
	  should.not.exist(checkFile("xit('is a-ok to use custom disallowed keywords')", []));
	  should.not.exist(checkFile("xit('is a-ok to use custom disallowed keywords')", {}));
  });

});
