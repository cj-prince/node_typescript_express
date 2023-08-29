import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const verifyAuthToken = ((req: any, res: Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }
  try {
    const token = authHeader.split(' ')[1];
   const verifiedData = jwt.verify(
      token,
      `${process.env.SECRET_TOKEN}`
   ) as JwtPayload;
    req.userId = verifiedData.userId;
    return next();
  } catch (error) {
    res.status(200).json({ message: 'Unauthorized User'});;
  }
});
