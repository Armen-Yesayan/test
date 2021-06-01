import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./auth/user.model";
import { DatabaseModule } from './database/database.module';
import {Database} from "./database/database.model";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'phpmyadmin',
            models: [
                User,
                Database
            ],
            autoLoadModels: true,
        }),
        AuthModule,
        DatabaseModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
