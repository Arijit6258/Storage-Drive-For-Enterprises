const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const { expect } = chai
const request = require('supertest')

chai.use(chaiHttp)

// Login test user
const userCredentials = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
}

var authenticatedUser = request.agent(app);
before(function(done){
  authenticatedUser
    .post('/login')
    .send(userCredentials)
    .end(function(err, response){
      expect(response.statusCode).to.equal(200);
      expect('Location', '/drive');
      done();
    });
});

describe('GET /trash', () => {
    it("should return 200 status for successful request", (done) => {
        authenticatedUser.get("/trash")
        .end((err, res) => {
            if (err) done(err);
            expect(res).to.have.status(200);
            expect(res).to.be.an("array");
        })
    })
})