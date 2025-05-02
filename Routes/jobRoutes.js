import express from 'express';
import { getJobs } from '../controllers/jobController.js';

const router = express.Router();

router.get('/getjobs', getJobs);

export default router;
