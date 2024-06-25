import chaiHttp from 'chai-http'
import { expect, use } from 'chai'
import app from '../src/app.js';


const server = use(chaiHttp)


describe('Admin Controller', () => {
    describe('GET /admin/best-profession', () => {
        it('should return the profession that earned the most money in the given time range', (done) => {
            server.request(app)
                .get('/api/admin/best-profession?start=2023-01-01&end=2023-12-31')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
    });

    describe('GET /admin/best-clients', () => {
        it('should return the clients that paid the most for jobs in the given time period with default limit', (done) => {
            request(app)
                .get('/api/admin/best-clients?start=2020-08-13&end=2020-08-19')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an([
                        {
                            "id": 6,
                            "firstName": "Ash",
                            "lastName": "Kethcum",
                            "price": 2020
                        },
                        {
                            "id": 7,
                            "firstName": "Harry",
                            "lastName": "Potter",
                            "price": 200
                        }
                    ]);
                    expect(res.body.length).to.be.at.most(2);
                    done();
                });
        });

        it('should return the clients that paid the most for jobs in the given time period with specified limit', (done) => {
            request(app)
                .get('/api/admin/best-clients?start=2023-01-01&end=2023-12-31&limit=3')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body.length).to.be.at.most(3);
                    done();
                });
        });
    });
});
