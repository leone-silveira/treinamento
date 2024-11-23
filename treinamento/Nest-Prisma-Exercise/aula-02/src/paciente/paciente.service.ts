import { Injectable } from '@nestjs/common';
import { UpdatePacienteDTO } from './dto/update-paciente.dto';
import { PrismaService } from 'src/repository/prisma.service';
import { CreatePacienteDTO } from './dto/create-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private readonly prismaService: PrismaService) { }

  async createPaciente(payload: CreatePacienteDTO) {
    return await this.prismaService.paciente.create({
      data: {
        name: payload.name,
        email: payload.email,
        age: payload.age,
        telefone: payload.telefone,
      }
    })
  }

  async listAll() {
    return await this.prismaService.paciente.findMany();
  }

  async updatePaciente(id: string, payload: UpdatePacienteDTO) {
    const userExists = await this.prismaService.paciente.findFirst({
      where: {
        id: id
      }
    })

    if (!userExists) {
      return 'Usuário não existe'
    }

    return await this.prismaService.paciente.update({
      where: {
        id: id
      },
      data: {
        ...payload,

      }
    })
  }


  async deletePaciente (id: string){
    return await this.prismaService.paciente.delete({
      where: {
        id: id
      },
    })
  }
}
