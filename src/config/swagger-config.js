
const swaggerOptionObj =  () => {
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
                    url: 'http://localhost:3001'
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
    return swaggerOptions;
}




module.exports = swaggerOptionObj;