import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Type } from '../type/type.entity';
import { Region } from '../region/region.entity';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'numeric', nullable: false })
  number: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Type, (type) => type.pokemons)
  @JoinTable({
    name: 'pokemon_type',
    joinColumn: { name: 'pokemon_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'type_id', referencedColumnName: 'id' },
  })
  types: Type[];

  @ManyToOne(() => Region, (region) => region.pokemons)
  @JoinColumn({ name: 'original_region_id' })
  originalRegion: Region;
}
