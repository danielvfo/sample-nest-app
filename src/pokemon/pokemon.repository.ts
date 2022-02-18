import { Repository, EntityRepository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon> {}
