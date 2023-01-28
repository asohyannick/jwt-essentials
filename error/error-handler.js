import { StatusCodes } from 'http-status-codes';
const errorMiddlware = async(req, res, next) => {
 res.status(StatusCodes.OK).json({msg:'Something went wrong. Please, try again.'});
}
export default errorMiddlware;