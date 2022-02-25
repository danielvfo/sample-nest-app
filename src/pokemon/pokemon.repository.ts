import { Repository, EntityRepository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon> {
  async getAllByType(type: string): Promise<Pokemon[]> {
    return this.createQueryBuilder('pokemon')
      .innerJoinAndSelect('pokemon.types', 'type')
      .where('type.description = :description', { description: type })
      .innerJoinAndSelect('pokemon.types', 'types')
      .innerJoinAndSelect('pokemon.heldItem', 'heldItem')
      .innerJoinAndSelect('pokemon.originalRegion', 'originalRegion')
      .getMany();
  }

  async getPokemonByNameQueryBuilder(name: string): Promise<Pokemon> {
    return this.createQueryBuilder('pokemon')
      .where('pokemon.name = :name', {
        name,
      })
      .innerJoinAndSelect('pokemon.types', 'types')
      .innerJoinAndSelect('pokemon.heldItem', 'heldItem')
      .innerJoinAndSelect('pokemon.originalRegion', 'originalRegion')
      .orderBy('pokemon.number', 'ASC')
      .printSql()
      .getOne();
  }

  async getPokemonByNameRepository(name: string): Promise<Pokemon> {
    return this.findOne({
      where: { name },
      relations: ['types', 'heldItem', 'originalRegion'],
      order: { number: 'ASC' },
    });
  }

  async getAllByTypeUsingSQL(type: string): Promise<Pokemon[]> {
    return this.manager.query(
      `
      SELECT pokemon.*, type.*
      FROM pokemon
      INNER JOIN pokemon_type ON pokemon.id = pokemon_type.pokemon_id
      INNER JOIN type ON pokemon_type.type_id = type.id
      WHERE type.description = '${type}'
      `,
    );
  }
}
