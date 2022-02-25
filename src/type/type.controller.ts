import { Controller, Get, Param } from '@nestjs/common';
import { Type } from './type.entity';
import { TypeRepository } from './type.repository';

type FindByTypeArgs = { type: string };

@Controller('type')
export class TypeController {
  constructor(private readonly typeRepository: TypeRepository) {}

  @Get(':type')
  async getAllPokemonsByTypeUsingFind(
    @Param() params: FindByTypeArgs,
  ): Promise<Type[]> {
    return this.typeRepository.find({
      where: { description: params.type },
      relations: ['pokemons', 'pokemons.types'],
    });
  }
}
