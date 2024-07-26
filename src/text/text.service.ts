import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TextEntity } from './entities/text.entity';
import { CountOfWordsDto } from './dto/count-of-words.dto';
import { CountOfCharactersDto } from './dto/count-of-characters.dto';
import { CountOfSentencesDto } from './dto/count-of-sentences.dto';
import { separateParagraphs, separateSentences } from './utils/text.util';
import { CountOfParagraphsDto } from './dto/count-of-paragraphs.dto';

@Injectable()
export class TextService {
  constructor(private prisma: PrismaService) {}

  create(createTextDto: CreateTextDto) {
    return this.prisma.texts.create({
      data: createTextDto,
    });
  }

  findAll() {
    return this.prisma.texts.findMany();
  }

  findOne(id: number) {
    return this.prisma.texts.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    return this.prisma.texts.update({
      where: { id },
      data: updateTextDto,
    });
  }

  remove(id: number) {
    return this.prisma.texts.delete({
      where: { id },
    });
  }

  async countOfWords(id: number): Promise<CountOfWordsDto> {
    const textInstance: TextEntity = await this.findOne(id);
    return new CountOfWordsDto({
      count: textInstance.text.split(' ').length,
      text: textInstance.text,
    });
  }

  async countOfCharacters(id: number): Promise<CountOfCharactersDto> {
    const textInstance: TextEntity = await this.findOne(id);
    return new CountOfCharactersDto({
      count: textInstance.text.length,
      text: textInstance.text,
    });
  }

  async countOfSentences(id: number): Promise<CountOfSentencesDto> {
    const textInstance: TextEntity = await this.findOne(id);
    return new CountOfSentencesDto({
      count: separateSentences(textInstance.text).length,
      text: textInstance.text,
    });
  }

  async countOfParagraphs(id: number): Promise<CountOfParagraphsDto> {
    const textInstance: TextEntity = await this.findOne(id);
    return new CountOfParagraphsDto({
      count: separateParagraphs(textInstance.text).length,
      text: textInstance.text,
    });
  }
}
