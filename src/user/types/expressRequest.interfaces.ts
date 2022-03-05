/* eslint-disable prettier/prettier */
import { Request } from 'express';
import { UserEntity } from '../entity/user.entity';

export interface ExpressRequest extends Request {
  user?: UserEntity;
}
