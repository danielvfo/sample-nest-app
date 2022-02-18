import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRepository } from './type.repository';

@Module({ imports: [TypeOrmModule.forFeature([TypeRepository])] })
export class TypeModule {}
