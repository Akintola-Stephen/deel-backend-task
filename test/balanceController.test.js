import chaiHttp from 'chai-http'
import { expect, use } from 'chai'
import app from '../src/app.js';


const server = use(chaiHttp)


describe('Balance Controller', () => {
    describe('POST /balances/deposit/:userId', () => {
        it('should deposit money into the balance of a client', (done) => {
            server.request(app)
                .post('/api/balances/deposit/1')
                .send({ amount: 100 })
                .set('profile_id', '1')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return 400 if the deposit amount exceeds 25% of total jobs to pay', (done) => {
            server.request(app)
                .post('/api/balances/deposit/1')
                .send({ amount: 1000 }) // Exceeding amount
                .set('profile_id', '1')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });
        });
    });
});
