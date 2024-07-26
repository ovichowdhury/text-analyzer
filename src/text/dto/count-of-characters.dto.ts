import { ApiProperty } from '@nestjs/swagger';

export class CountOfCharactersDto {
  constructor({ ...data }: Partial<CountOfCharactersDto>) {
    Object.assign(this, data);
  }

  @ApiProperty({ required: true })
  count: number;

  @ApiProperty({ required: true })
  text: string;
}
