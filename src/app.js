const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { sequelize } = require('../src/model');
const { getProfile } = require('./middleware/getProfile');
const { errorHandler } = require('./middleware/errorHandler');
const adminRoutes = require('./routes/adminRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const contractRoutes = require('./routes/contractRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Deel Backend API',
            version: '1.0.0',
            description: 'API documentation for Deel Backend Task'
        },
        servers: [
            {
                url: 'http://localhost:3001/api'
            }
        ],
        components: {
            schemas: {
                Contract: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        status: { type: 'string' },
                        clientId: { type: 'integer' },
                        contractorId: { type: 'integer' }
                    }
                },
                Job: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        description: { type: 'string' },
                        price: { type: 'number' },
                        paid: { type: 'boolean' },
                        paymentDate: { type: 'string', format: 'date-time' },
                        contractId: { type: 'integer' }
                    }
                },
                Profile: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        fullName: { type: 'string' },
                        balance: { type: 'number' }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.js']
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(getProfile);

app.use('/admin', adminRoutes);
app.use('/balances', balanceRoutes);
app.use('/contracts', contractRoutes);
app.use('/jobs', jobRoutes);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.sync();
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    } catch (err) {
        console.error('Failed to start the server:', err);
    }
};

start();
