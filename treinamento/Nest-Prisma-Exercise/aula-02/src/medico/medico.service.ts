import { Injectable } from '@nestjs/common';
import { CreateMedicoDTO } from './dto/create-medico.dto';
import { UpdateMedicoDTO } from './dto/update-medico.dto';
import { PrismaService } from 'src/repository/prisma.service';

@Injectable()
export class MedicoService {
  constructor(private readonly prismaService: PrismaService) { }


  async createMedico(payload: CreateMedicoDTO) {
    return await this.prismaService.medico.create({
      data: {
        name: payload.name,
        email: payload.email,
        especialidade: payload.especialidade,
        telefone: payload.telefone,
      }
    })
  }

  async listAll() {
    return await this.prismaService.medico.findMany();
}
async updateMedico(id: string, payload: UpdateMedicoDTO) {
  const userExists = await this.prismaService.medico.findFirst({
    where: {
      id: id
    }
  })

  if (!userExists) {
    return 'Usuário não existe'
  }

  return await this.prismaService.medico.update({
    where: {
      id: id
    },
    data: {
      ...payload,

    }
  })
}

async deleteMedico (id: string){
  return await this.prismaService.medico.delete({
    where: {
      id: id
    },
  })
}

}
