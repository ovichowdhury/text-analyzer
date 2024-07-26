import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTextDto {
  @ApiProperty({ required: true })
  @IsString()
  @MinLength(3)
  @MaxLength(300)
  text: string;
}
