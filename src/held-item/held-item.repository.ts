import { Repository, EntityRepository } from 'typeorm';
import { HeldItem } from './held-item.entity';

@EntityRepository(HeldItem)
export class HeldItemRepository extends Repository<HeldItem> {}
