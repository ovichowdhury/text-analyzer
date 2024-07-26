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
}
