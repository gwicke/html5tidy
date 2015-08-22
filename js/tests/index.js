var expect = require('chai').expect;

var lib = require('../lib');

describe('node_html5tidy', function() {
  it('Should return 1 after calling hello_rust', function() {
    expect(lib.helloRust('node_html5tidy')).to.be.equal(1);
  });

  it('Should be able to get mutated input from hello_struct', function() {
    var obj = { msg: 'Hello Rust!' };
    lib.helloStruct(obj);
    console.log(obj.msg);
    expect(obj).to.deep.equal({ msg: 'Hello JS!' });
  });
});
