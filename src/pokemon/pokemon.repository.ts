import { Repository, EntityRepository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon> {
  async getAllByType(type: string): Promise<Pokemon[]> {
    return this.createQueryBuilder('pokemon')
      .leftJoinAndSelect('pokemon.types', 'type')
      .where('type.description = :description', { description: type })
      .getMany();
  }
}
