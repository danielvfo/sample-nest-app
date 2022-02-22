import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeldItemRepository } from './held-item.repository';

@Module({ imports: [TypeOrmModule.forFeature([HeldItemRepository])] })
export class HeldItemModule {}
