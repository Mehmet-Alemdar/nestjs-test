import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const age = parseInt(value.age.toString());

    if (isNaN(age)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age};
  }
}
