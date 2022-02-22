import { Controller, Get, Param } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { PokemonRepository } from './pokemon.repository';

type FindByTypeArgs = { type: string };

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  @Get(':type')
  async getAllPokemonsByTypeUsingQueryBuilder(
    @Param() params: FindByTypeArgs,
  ): Promise<Pokemon[]> {
    return this.pokemonRepository.getAllByType(params.type);
  }
}
