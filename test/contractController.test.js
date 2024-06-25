import chaiHttp from 'chai-http'
import { expect, use } from 'chai'
import app from '../src/app.js';


const server = use(chaiHttp)


describe('Contract Controller', () => {
    describe('GET /contracts/:id', () => {
        it('should return the contract if it belongs to the profile calling', (done) => {
            server.request(app)
                .get('/api/contracts/1')
                .set('profile_id', '1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });

        it('should return 404 if contract does not belong to the profile', (done) => {
            server.request(app)
                .get('/api/contracts/2')
                .set('profile_id', '1')
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    done();
                });
        });
    });

    describe('GET /contracts', () => {
        it('should return a list of non-terminated contracts for the profile calling', (done) => {
            server.request(app)
                .get('/api/contracts')
                .set('profile_id', '1') // Set appropriate profile_id
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });
});
