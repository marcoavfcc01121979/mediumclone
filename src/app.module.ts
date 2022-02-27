import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';

import { default as TypeormConfig } from './config/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(TypeormConfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
