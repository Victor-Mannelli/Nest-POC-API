import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTest() {
    return ['a', 'a', 'a', 'a', 'a'];
  }
  @Post('test')
  postTest(@Body() body: any): string {
    console.log(body);
    return;
  }
}
