import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './pokemon.repository';
import { PokemonController } from './pokemon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonRepository])],
  controllers: [PokemonController],
})
export class PokemonModule {}
