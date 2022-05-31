import { Controller, Get, Query } from '@nestjs/common';
import { Type } from './type.entity';
import { TypeRepository } from './type.repository';

type FindByTypeArgs = { description: string };

@Controller('type')
export class TypeController {
  constructor(private readonly typeRepository: TypeRepository) {}

  @Get()
  async getAllPokemonsByTypeUsingFind(
    @Query() query: FindByTypeArgs,
  ): Promise<Type[]> {
    const { description } = query;

    console.log({ description });

    return this.typeRepository.find({
      where: { description },
      relations: ['pokemons', 'pokemons.types'],
    });
  }
}
