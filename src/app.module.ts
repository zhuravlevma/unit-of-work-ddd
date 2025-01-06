import { Module } from '@nestjs/common';
import { UserController } from './user/controllers/user.controller';
import { UserService } from './user/domain/user.service';
import { UserRepository } from './user/dal/user.repository';
import { ConfigModule } from '@nestjs/config';
import { PrismaProvider } from './prisma/prisma-provider';
import { DatabaseModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useFactory: (a, b) => new UserService(a, b),
      inject: [UserRepository, PrismaProvider],
    },
    UserRepository,
  ],
})
export class AppModule {}
