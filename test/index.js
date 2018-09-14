const request = require('supertest');
var app = require('./../index');
var assert = require('assert');

it('test1', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .then(function(data){
      assert(data.res.text === 'Hello World Handson 0914');
      done();
      process.exit(0);
    }).catch(function(err){
      console.log(err);
      process.exit(1);
    });
});