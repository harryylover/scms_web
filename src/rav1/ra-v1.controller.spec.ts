import { Test, TestingModule } from '@nestjs/testing';
import { Ra_v1Controller } from './ra-v1.controller';

describe('Rav1Controller', () => {
  let controller: Ra_v1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ra_v1Controller],
    }).compile();

    controller = module.get<Ra_v1Controller>(Ra_v1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
