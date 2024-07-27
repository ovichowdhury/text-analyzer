import { ApiProperty } from '@nestjs/swagger';
import LongestWordInParagraph from '../interface/longest-word-in-paragraph/longest-word-in-paragraph.interface';

class LongestWordInParagraphType implements LongestWordInParagraph {
  @ApiProperty({ required: true })
  word: string;

  @ApiProperty({ required: true })
  numOfCharacters: number;

  @ApiProperty({ required: true })
  paragraph: string;
}

export class LongestWordInParagraphsDto {
  constructor({ ...data }: Partial<LongestWordInParagraphsDto>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    required: true,
    isArray: true,
    type: LongestWordInParagraphType,
  })
  paragraphs: LongestWordInParagraph[];

  @ApiProperty({ required: true })
  text: string;
}
