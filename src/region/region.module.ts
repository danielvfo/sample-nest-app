import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionRepository } from './region.repository';

@Module({ imports: [TypeOrmModule.forFeature([RegionRepository])] })
export class RegionModule {}
