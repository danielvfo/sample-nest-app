import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeldItemRepository } from './held-item.repository';
import { HeldItemController } from './held-item.controller';

@Module({ imports: [TypeOrmModule.forFeature([HeldItemRepository])], controllers: [HeldItemController] })
export class HeldItemModule {}
