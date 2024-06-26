import { Router } from 'express';
import { getContract, getContracts } from '../controllers/contractController.js';

const router = Router();


/**
 * @swagger
 * /contracts/{id}:
 *   get:
 *     summary: Get contract by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The contract ID
 *     responses:
 *       200:
 *         description: A contract object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contract'
 */
router.get('/:id', getContract);

/**
 * @swagger
 * /contracts:
 *   get:
 *     summary: Get list of non-terminated contracts for a user
 *     responses:
 *       200:
 *         description: List of contracts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contract'
 */
router.get('/', getContracts);

export default router;
