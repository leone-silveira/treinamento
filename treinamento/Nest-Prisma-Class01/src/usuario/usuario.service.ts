import { Injectable } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/createUsuario.dto';
import { PrismaService } from 'src/repository/prisma.service';
import { UpdateUsuarioDTO } from './dto/updateUsuario.dto';

@Injectable()
export class UsuarioService {
    constructor(private readonly prismaService: PrismaService) { }

    async listAll() {
        return await this.prismaService.usuarios.findMany();
    }

    async createUsuario(payload: CreateUsuarioDTO) {
        return await this.prismaService.usuarios.create({
            data: {
                name: payload.name,
                email: payload.email,
                age: payload.age,

            }
        })
    }
    async updateUsuario(id: string, payload: UpdateUsuarioDTO) {
        const userExists = await this.prismaService.usuarios.findFirst({
            where: {
                id: id
            }
        })

        if (!userExists) {
            return 'Usuário não existe'
        }

        return await this.prismaService.usuarios.update({
            where: {
                id : id
            },
            data: {
                ...payload,

            }
        })
    }
}

