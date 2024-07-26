import { ApiProperty } from '@nestjs/swagger';

export class CountOfParagraphsDto {
  constructor({ ...data }: Partial<CountOfParagraphsDto>) {
    Object.assign(this, data);
  }

  @ApiProperty({ required: true })
  count: number;

  @ApiProperty({ required: true })
  text: string;
}
