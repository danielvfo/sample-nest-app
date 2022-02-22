import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionRepository } from './region.repository';
import { RegionController } from './region.controller';

@Module({ imports: [TypeOrmModule.forFeature([RegionRepository])], controllers: [RegionController] })
export class RegionModule {}
