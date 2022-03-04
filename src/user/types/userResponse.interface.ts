/* eslint-disable prettier/prettier */
import { UserType } from './user.types';

export interface UserResponseInterface {
  user: UserType & { token: string };
}
