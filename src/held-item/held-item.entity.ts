import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';

@Entity()
export class HeldItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'item_name', type: 'varchar', nullable: false })
  itemName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => Pokemon, (pokemon) => pokemon.heldItem)
  pokemon: Pokemon;
}
