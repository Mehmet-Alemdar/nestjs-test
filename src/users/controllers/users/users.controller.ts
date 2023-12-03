import { Body, Controller, Post, Get, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get(":email")
  getUserByEmail(@Param('email') email: string) {
    const user = this.userService.fetchUserByEmail(email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
