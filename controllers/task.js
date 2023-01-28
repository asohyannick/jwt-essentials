import express from 'express';
import { StatusCodes } from 'http-status-codes';
import asyncWrapper from '../middlewares/async.js';
import  jwt  from 'jsonwebtoken';
const router = express.Router();
export const login = asyncWrapper( async(req, res) => {
 const { username, password, email } = req.body;
 if(!username  || !password || !email ) {
 res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide username,password,and email.'});
};
 const id = new Date().getDate();
 const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});
 res.status(StatusCodes.OK).json({msg:'User created.', token});
 
});

export const dashBoard =  asyncWrapper( async(req, res) => {
 const newNumber = Math.floor(Math.random() * 100);
 res.status(StatusCodes.OK).json({msg:`Hello ${req.user.username}`, secret: `your gracious number is ${newNumber} and ${token}`});
});

export default router;