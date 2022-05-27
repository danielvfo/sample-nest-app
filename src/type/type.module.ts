import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRepository } from './type.repository';
import { TypeController } from './type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeRepository])],
  controllers: [TypeController],
})
export class TypeModule {}
