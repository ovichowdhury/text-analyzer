import { Test, TestingModule } from '@nestjs/testing';
import { TextController } from './text.controller';
import { TextService } from './text.service';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { CountOfWordsDto } from './dto/count-of-words.dto';
import { CountOfCharactersDto } from './dto/count-of-characters.dto';
import { CountOfSentencesDto } from './dto/count-of-sentences.dto';
import { CountOfParagraphsDto } from './dto/count-of-paragraphs.dto';
import {
  LongestWordInParagraphsDto,
  LongestWordInParagraphType,
} from './dto/longest-word-in-paragraphs.dto';

describe('TextController', () => {
  let controller: TextController;
  let textService: TextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextController],
      providers: [
        {
          provide: TextService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
            countOfWords: jest.fn(),
            countOfCharacters: jest.fn(),
            countOfSentences: jest.fn(),
            countOfParagraphs: jest.fn(),
            longestWordInParagraphs: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TextController>(TextController);
    textService = module.get<TextService>(TextService);
  });

  it('[TextController] should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('[TextController] create function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(textService, 'create').mockResolvedValueOnce(text);

    expect(
      await controller.create(new CreateTextDto({ text: 'hello world' })),
    ).toBe(text);
  });

  it('[TextController] findAll function should return positive', async () => {
    const texts = [
      {
        id: 1,
        text: 'hello world',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        text: 'hello mars',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(textService, 'findAll').mockResolvedValueOnce(texts);

    expect(await controller.findAll()).toBe(texts);
  });

  it('[TextController] findOne function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(textService, 'findOne').mockResolvedValueOnce(text);

    expect(await controller.findOne('1')).toBe(text);
  });

  it('[TextController] update function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello Mars',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(textService, 'update').mockResolvedValueOnce(text);

    expect(
      await controller.update('1', new UpdateTextDto({ text: 'Hello Mars' })),
    ).toBe(text);
  });

  it('[TextController] remove function should return positive', async () => {
    const text = {
      id: 1,
      text: 'hello world',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(textService, 'remove').mockResolvedValueOnce(text);

    expect(await controller.remove('1')).toBe(text);
  });

  it('[TextController] countOfWords function should return positive', async () => {
    const countOfWords: CountOfWordsDto = new CountOfWordsDto({
      count: 2,
      text: 'hello world',
    });
    jest.spyOn(textService, 'countOfWords').mockResolvedValueOnce(countOfWords);

    expect(await controller.countOfWords('1')).toBe(countOfWords);
  });

  it('[TextController] countOfCharacters function should return positive', async () => {
    const countOfChars: CountOfCharactersDto = new CountOfCharactersDto({
      count: 11,
      text: 'hello world',
    });
    jest
      .spyOn(textService, 'countOfCharacters')
      .mockResolvedValueOnce(countOfChars);

    expect(await controller.countOfCharacters('1')).toBe(countOfChars);
  });

  it('[TextController] countOfSentences function should return positive', async () => {
    const countOfSents: CountOfSentencesDto = new CountOfSentencesDto({
      count: 1,
      text: 'hello world',
    });
    jest
      .spyOn(textService, 'countOfSentences')
      .mockResolvedValueOnce(countOfSents);

    expect(await controller.countOfSentences('1')).toBe(countOfSents);
  });

  it('[TextController] countOfParagraphs function should return positive', async () => {
    const countOfParas: CountOfParagraphsDto = new CountOfParagraphsDto({
      count: 1,
      text: 'hello world',
    });
    jest
      .spyOn(textService, 'countOfParagraphs')
      .mockResolvedValueOnce(countOfParas);

    expect(await controller.countOfParagraphs('1')).toBe(countOfParas);
  });

  it('[TextController] longestWordInParagraphs function should return positive', async () => {
    const longestWord: LongestWordInParagraphsDto =
      new LongestWordInParagraphsDto({
        paragraphs: [
          new LongestWordInParagraphType({
            word: 'hello',
            numOfCharacters: 5,
            paragraph: 'hello world',
          }),
        ],
        text: 'hello world',
      });
    jest
      .spyOn(textService, 'longestWordInParagraphs')
      .mockResolvedValueOnce(longestWord);

    expect(await controller.longestWordsInParagraphs('1')).toBe(longestWord);
  });
});
