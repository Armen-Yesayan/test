import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Database} from "./database.model";
import {DatabaseDto} from "./dto/database.dto";

@Injectable()
export class DatabaseService {
    constructor(@InjectModel(Database) private databaseModel: typeof Database) {}

    async allDB() {
        return await this.databaseModel.findAll();
    }

    async create(dto: DatabaseDto) {
        if(dto.name !== '') {
            return await this.databaseModel.create(dto);
        }
        throw new HttpException({message: 'Name required'},HttpStatus.LENGTH_REQUIRED)
    }

}
