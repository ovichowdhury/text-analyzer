import { ApiProperty } from '@nestjs/swagger';

export class TextNotFound {
  @ApiProperty()
  message: string;

  @ApiProperty({ nullable: true })
  statusCode?: number;

  @ApiProperty({ nullable: true })
  timestamp?: string;

  @ApiProperty({ nullable: true })
  path?: string;
}
