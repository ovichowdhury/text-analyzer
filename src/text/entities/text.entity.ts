import { ApiProperty } from '@nestjs/swagger';
import { Texts } from '@prisma/client';

export class TextEntity implements Texts {
  constructor({ ...data }: Partial<TextEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ nullable: true })
  updatedAt: Date;
}
