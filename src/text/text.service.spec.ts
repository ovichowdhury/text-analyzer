import { Test, TestingModule } from '@nestjs/testing';
import { TextService } from './text.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';

describe('TextService', () => {
  let service: TextService;
  let prismaMock: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    prismaMock = mockDeep<PrismaClient>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TextService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<TextService>(TextService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('[TextService] should be defined', () => {
    expect(service).toBeDefined();
  });

  it('[TextService] create function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaMock.texts.create.mockResolvedValue(text);

    const result = await service.create(
      new CreateTextDto({ text: 'hello world' }),
    );

    expect(result).toEqual(text);
  });

  it('[TextService] findAll function should return positive', async () => {
    const texts = [
      {
        id: 1,
        text: 'hello world',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    prismaMock.texts.findMany.mockResolvedValue(texts);

    const result = await service.findAll();

    expect(result).toEqual(texts);
  });

  it('[TextService] findOne function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaMock.texts.findFirstOrThrow.mockResolvedValue(text);

    const result = await service.findOne(1);

    expect(result).toEqual(text);
  });

  it('[TextService] update function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello mars',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaMock.texts.update.mockResolvedValue(text);

    const result = await service.update(
      1,
      new UpdateTextDto({ text: 'hello mars' }),
    );

    expect(result).toEqual(text);
  });

  it('[TextService] remove function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaMock.texts.delete.mockResolvedValue(text);

    const result = await service.remove(1);

    expect(result).toEqual(text);
  });
});
