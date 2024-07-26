import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TextController],
  providers: [TextService],
  imports: [PrismaModule],
})
export class TextModule {}
