import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Database} from "./database.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
      SequelizeModule.forFeature([Database]),
      JwtModule.register({
          secret: process.env.PRIVATE_KEY || 'secret_key',
          signOptions: {
              expiresIn: '24h'
          }
      })
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService]
})
export class DatabaseModule {}
