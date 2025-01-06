import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaProvider } from 'src/prisma/prisma-provider';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaProvider) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.client.user.findMany();
  }

  async create(body: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.client.user.create({
      data: body,
    });
  }

  async update(userId: number, userData: Prisma.UserUpdateInput): Promise<any> {
    return this.prisma.client.user.update({
      where: { id: userId },
      data: userData,
    });
  }
}
