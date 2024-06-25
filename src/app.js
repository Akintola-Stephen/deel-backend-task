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
const swaggerOptionObj = require("./config/swagger-config")

const app = express();


const swaggerDocs = swaggerJsDoc(swaggerOptionObj());
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
