import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TextModule } from './text/text.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, TextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
