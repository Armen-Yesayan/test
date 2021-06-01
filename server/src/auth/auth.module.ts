import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      SequelizeModule.forFeature([
          User
      ]),
      JwtModule.register({
          secret: process.env.PRIVATE_KEY || 'secret_key',
          signOptions: {
              expiresIn: '24h'
          }
      })
  ]
})
export class AuthModule {}
