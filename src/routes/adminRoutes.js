import { Router } from 'express';
import { getBestProfession, getBestClients } from '../controllers/adminController.js';

const router = Router();


/**
 * @swagger
 * /admin/best-profession:
 *   get:
 *     summary: Get the profession that earned the most money
 *     parameters:
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Start date for the query
 *       - in: query
 *         name: end
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: End date for the query
 *     responses:
 *       200:
 *         description: A list of professions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 profession:
 *                   type: string
 *                 total_earned:
 *                   type: number
 */

router.get('/best-profession', getBestProfession);


/**
 * @swagger
 * /admin/best-clients:
 *   get:
 *     summary: Get the clients that paid the most for jobs
 *     parameters:
 *       - in: query
 *         name: start
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Start date for the query
 *       - in: query
 *         name: end
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: End date for the query
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: Limit the number of results
 *     responses:
 *       200:
 *         description: A list of clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   fullName:
 *                     type: string
 *                   paid:
 *                     type: number
 */
router.get('/best-clients', getBestClients);

export default router;
