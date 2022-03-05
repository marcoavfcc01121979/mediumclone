/* eslint-disable prettier/prettier */
import { JWT_SECRET } from '../../config/index';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ExpressRequest } from '../types/expressRequest.interfaces';
import { UserService } from '../user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    console.log('authMiddle', req.headers);
    if (!req.headers.authorization) {
      req.user = null
      next()
      return
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET); 
      const user = await this.userService.findById(decode.id);
      req.user = user;
      next(); 
    } catch (error) {
      req.user = null;
      next();
    }
  }
}
