import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthDto} from "./dto/authDto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(@InjectModel(User) private userModel: typeof User,
                private jwtService: JwtService) {}

    async login(authDto: AuthDto) {
        const user = await this.validateUser(authDto);

        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id};

        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(dto: AuthDto) {
        const user = await this.getUserByEmail(dto.email);
        const passwordEquals = await bcrypt.compare(dto.password, user.password);

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Неправильный логин или пароль'});
    }

    private async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({where: {email}});

        return user;
    }
}
