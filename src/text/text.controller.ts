import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TextService } from './text.service';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TextEntity } from './entities/text.entity';
import { TextNotFound } from './dto/text-not-found.dto';
import { ValidIdPipe } from './pipes/valid-id/valid-id.pipe';
import { CountOfWordsDto } from './dto/count-of-words.dto';
import { CountOfCharactersDto } from './dto/count-of-characters.dto';
import { CountOfSentencesDto } from './dto/count-of-sentences.dto';
import { CountOfParagraphsDto } from './dto/count-of-paragraphs.dto';
import { LongestWordInParagraphsDto } from './dto/longest-word-in-paragraphs.dto';

@Controller('text')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post()
  @ApiTags('Texts')
  @ApiCreatedResponse({ type: TextEntity })
  create(@Body() createTextDto: CreateTextDto) {
    return this.textService.create(createTextDto);
  }

  @Get()
  @ApiTags('Texts')
  @ApiOkResponse({ type: TextEntity, isArray: true })
  findAll() {
    return this.textService.findAll();
  }

  @Get(':id')
  @ApiTags('Texts')
  @ApiOkResponse({ type: TextEntity })
  @ApiNotFoundResponse({ type: TextNotFound })
  findOne(@Param('id') id: string) {
    return this.textService.findOne(+id);
  }

  @Patch(':id')
  @ApiTags('Texts')
  @ApiOkResponse({ type: TextEntity })
  @ApiNotFoundResponse({ type: TextNotFound })
  update(
    @Param('id', ValidIdPipe) id: string,
    @Body() updateTextDto: UpdateTextDto,
  ) {
    return this.textService.update(+id, updateTextDto);
  }

  @Delete(':id')
  @ApiTags('Texts')
  @ApiOkResponse({ type: TextEntity })
  @ApiNotFoundResponse({ type: TextNotFound })
  remove(@Param('id', ValidIdPipe) id: string) {
    return this.textService.remove(+id);
  }

  @Get(':id/words')
  @ApiTags('Texts')
  @ApiOkResponse({ type: CountOfWordsDto })
  @ApiNotFoundResponse({ type: TextNotFound })
  async countOfWords(@Param('id', ValidIdPipe) id: string) {
    return await this.textService.countOfWords(+id);
  }

  @Get(':id/characters')
  @ApiTags('Texts')
  @ApiOkResponse({ type: CountOfCharactersDto })
  @ApiNotFoundResponse({ type: TextNotFound })
  async countOfCharacters(@Param('id', ValidIdPipe) id: string) {
    return await this.textService.countOfCharacters(+id);
  }

  @Get(':id/sentences')
  @ApiTags('Texts')
  @ApiOkResponse({ type: CountOfSentencesDto })
  @ApiNotFoundResponse({ type: TextNotFound })
  async countOfSentences(@Param('id', ValidIdPipe) id: string) {
    return await this.textService.countOfSentences(+id);
  }

  @Get(':id/paragraphs')
  @ApiTags('Texts')
  @ApiOkResponse({ type: CountOfParagraphsDto })
  @ApiNotFoundResponse({ type: TextNotFound })
  async countOfParagraphs(@Param('id', ValidIdPipe) id: string) {
    return await this.textService.countOfParagraphs(+id);
  }

  @Get(':id/paragraphs/longest-word')
  @ApiTags('Texts')
  @ApiOkResponse({ type: LongestWordInParagraphsDto })
  @ApiNotFoundResponse({ type: TextNotFound })
  async longestWordsInParagraphs(@Param('id', ValidIdPipe) id: string) {
    return await this.textService.longestWordInParagraphs(+id);
  }
}
