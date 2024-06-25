import chaiHttp from 'chai-http'
import { expect, use } from 'chai'
import app from '../src/app.js';


const server = use(chaiHttp)


describe('Job Controller', () => {
    describe('GET /jobs/unpaid', () => {
        it('should return all unpaid jobs for the profile calling', (done) => {
            server.request(app)
                .get('/api/jobs/unpaid')
                .set('profile_id', '1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /jobs/:job_id/pay', () => {
        it('should pay for a job if the client has enough balance', (done) => {
            server.request(app)
                .post('/api/jobs/1/pay')
                .set('profile_id', '1') 
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return 400 if the client does not have enough balance', (done) => {
            server.request(app)
                .post('/api/jobs/2/pay')
                .set('profile_id', '1')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });
        });
    });
});
