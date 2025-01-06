import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserRepository } from '../dal/user.repository';
import { PrismaProvider } from 'src/prisma/prisma-provider';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaProvider,
  ) {}

  async getUser(): Promise<User[]> {
    return this.userRepository.getUsers();
  }

  async createUser(userData: Prisma.UserCreateInput): Promise<any> {
    try {
      return this.prisma.transaction(async () => {
        await this.userRepository.create(userData);
        return this.userRepository.update(1, {
          age: Math.floor(Math.random() * 100),
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
}
