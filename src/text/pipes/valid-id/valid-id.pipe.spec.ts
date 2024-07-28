import { Test, TestingModule } from '@nestjs/testing';
import { ValidIdPipe } from './valid-id.pipe';
import { TextService } from '../../../text/text.service';
import { ArgumentMetadata, NotFoundException } from '@nestjs/common';

describe('ValidIdPipe', () => {
  let pipe: ValidIdPipe;
  let textService: TextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ValidIdPipe,
        {
          provide: TextService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    pipe = module.get<ValidIdPipe>(ValidIdPipe);
    textService = module.get<TextService>(TextService);
  });

  it('[ValidIdPipe] should be defined', async () => {
    expect(pipe).toBeDefined();
  });

  it('[ValidIdPipe] should return value for valid id', async () => {
    jest.spyOn(textService, 'findOne').mockResolvedValueOnce({
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const value = 1;
    const metadata: ArgumentMetadata = { type: 'param' };

    const transformedValue = await pipe.transform(value, metadata);

    expect(transformedValue).toBe(value);
  });

  it('[ValidIdPipe] throw error on invalid id provided', async () => {
    jest
      .spyOn(textService, 'findOne')
      .mockRejectedValueOnce(new NotFoundException('Text id not found'));

    const value = 1;
    const metadata: ArgumentMetadata = { type: 'param' };

    try {
      await pipe.transform(value, metadata);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Text id not found');
    }
  });
});
