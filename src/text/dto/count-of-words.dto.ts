import { ApiProperty } from '@nestjs/swagger';

export class CountOfWordsDto {
  constructor({ ...data }: Partial<CountOfWordsDto>) {
    Object.assign(this, data);
  }

  @ApiProperty({ required: true })
  count: number;

  @ApiProperty({ required: true })
  text: string;
}
