import express from 'express';
import { getTableUsers, signIn } from './user_controller.js';

const userRouter=express.Router();
userRouter.get('/login',signIn);
userRouter.get('/getusers',getTableUsers)
export default userRouter;