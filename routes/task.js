import express from 'express';
import { login, dashBoard } from '../controllers/task.js'
import authenticationMiddleware  from '../middlewares/auth.js'
// the auth middleware is mainly to protect our dashboard.
const router = express.Router();
router.route('/dashboard').get(authenticationMiddleware, dashBoard);
router.route('/login').post(login);
export default router;
