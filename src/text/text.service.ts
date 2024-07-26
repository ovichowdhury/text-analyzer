import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TextService {
  constructor(private prisma: PrismaService) {}

  create(createTextDto: CreateTextDto) {
    return this.prisma.texts.create({
      data: createTextDto,
    });
  }

  findAll() {
    return this.prisma.texts.findMany();
  }

  findOne(id: number) {
    return this.prisma.texts.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    return this.prisma.texts.update({
      where: { id },
      data: updateTextDto,
    });
  }

  remove(id: number) {
    return this.prisma.texts.delete({
      where: { id },
    });
  }
}
