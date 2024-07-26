import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags('App')
  @ApiOkResponse({ description: 'Ping api endpoint' })
  getHello(): string {
    return this.appService.getHello();
  }
}
