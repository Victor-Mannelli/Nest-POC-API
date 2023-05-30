import { Module } from '@nestjs/common';
import { AppController } from './modules/data/app.controller';
import { AppService } from './modules/data/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
