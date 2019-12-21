import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import typeormConfig from '../ormconfig.json';
@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig as TypeOrmModuleOptions), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
