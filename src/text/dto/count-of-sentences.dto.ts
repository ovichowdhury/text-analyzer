import { ApiProperty } from '@nestjs/swagger';

export class CountOfSentencesDto {
  constructor({ ...data }: Partial<CountOfSentencesDto>) {
    Object.assign(this, data);
  }

  @ApiProperty({ required: true })
  count: number;

  @ApiProperty({ required: true })
  text: string;
}
