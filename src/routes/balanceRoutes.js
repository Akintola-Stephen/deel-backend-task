const express = require('express');
const { deposit } = require('../controllers/balanceController');

const router = express.Router();

/**
 * @swagger
 * /balances/deposit/{userId}:
 *   post:
 *     summary: Deposit money into a client's balance
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Balance deposit successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 */
router.post('/deposit/:userId', deposit);

module.exports = router;
