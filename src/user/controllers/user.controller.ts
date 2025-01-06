import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Get,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '../domain/user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    try {
      const user = await this.userService.getUser();
      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() userData: CreateUserDto) {
    try {
      const user = await this.userService.createUser(userData);
      return user;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to create user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
