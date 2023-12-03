import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
@Injectable()
export class UsersService {
  private users = [{ username: 'john', email: 'example@mail.com' }];
  fetchUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  fetchUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
}
