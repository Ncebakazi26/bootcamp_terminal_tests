let assert = require("assert")
let greet = require("../greet");

describe('The greet function(greet())', function () {
  it('should greet Bob correctly', function () {
    assert.equal('Hello, Bob', greet('Bob'))
  });
  it('Should greet Ncesh correctly', function () {
    assert.equal('Hello, Ncesh', greet('Ncesh'))
  });
});