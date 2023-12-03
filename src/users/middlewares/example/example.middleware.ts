import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers

    if (!authorization) {
      throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
    }
    if (authorization == '123') {
      next();
    } else {
      throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
