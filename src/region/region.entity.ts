import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pokemon } from '../pokemon/pokemon.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.originalRegion, {
    cascade: ['insert', 'update', 'remove'],
  })
  pokemons: Pokemon[];
}
