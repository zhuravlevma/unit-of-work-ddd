import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma-provider';
import { UnitOfWork } from './unit-of-work';

@Module({
  providers: [
    {
      provide: UnitOfWork,
      useValue: PrismaProvider,
    },
    PrismaProvider,
  ],
  exports: [UnitOfWork, PrismaProvider],
})
export class DatabaseModule {}
