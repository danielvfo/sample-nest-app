import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonRepository } from './pokemon.repository';

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonRepository],
      controllers: [PokemonController],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(0 > 1).toBeTruthy();
  });
});
