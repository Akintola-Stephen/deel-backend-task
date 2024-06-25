import express, { json } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { sequelize } from './model/index.js';
import { getProfile } from './middleware/getProfile.js';
import { errorHandler } from './middleware/errorHandler.js';
import adminRoutes from './routes/adminRoutes.js';
import balanceRoutes from './routes/balanceRoutes.js';
import contractRoutes from './routes/contractRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import { swaggerOptionObj } from "./config/swagger-config.js";

const app = express();


const swaggerDocs = swaggerJsDoc(swaggerOptionObj());
app.use('/api-docs', serve, setup(swaggerDocs));

app.use(json());
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

export default app;
