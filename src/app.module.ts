import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ra_v1Controller } from './rav1/ra-v1.controller';

@Module({
  imports: [],
  controllers: [AppController, Ra_v1Controller],
  providers: [AppService],
})
export class AppModule {}
