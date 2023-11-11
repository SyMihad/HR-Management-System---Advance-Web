import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job/job.module';
import config from 'ormconfig';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(config), JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
