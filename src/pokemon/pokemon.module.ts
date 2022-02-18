import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './pokemon.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonRepository])],
})
export class PokemonModule {}
