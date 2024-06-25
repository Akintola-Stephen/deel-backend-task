import { Router } from 'express';
import { getUnpaidJobs, payJob } from '../controllers/jobController.js';

const router = Router();


/**
 * @swagger
 * /jobs/unpaid:
 *   get:
 *     summary: Get all unpaid jobs for a user
 *     responses:
 *       200:
 *         description: List of unpaid jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 */
router.get('/unpaid', getUnpaidJobs);

/**
 * @swagger
 * /jobs/{job_id}/pay:
 *   post:
 *     summary: Pay for a job
 *     parameters:
 *       - in: path
 *         name: job_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The job ID
 *     responses:
 *       200:
 *         description: Job payment successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 */
router.post('/:jobId/pay', payJob);

export default router;
