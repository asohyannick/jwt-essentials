import jwt from "jsonwebtoken";
import { StatusCodes } from 'http-status-codes';
const authenticationMiddleware  = async(req, res, next) => {
 const authHeader = req.headers.authorization;
 if(!authHeader || !authHeader.startsWith('Bearer')) {
  res.status(StatusCodes.UNAUTHORIZED).json({msg:'No token provided.'});
 }
 const token = authHeader.split(' ')[1]
 // verifications
 try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { id, username} = decoded
  req.user = {id, username}
  next();
} catch(error) {
  console.log({error:msg`Not authorized to access this route`}).status(StatusCodes.UNAUTHORIZED);
}

}
export default authenticationMiddleware;