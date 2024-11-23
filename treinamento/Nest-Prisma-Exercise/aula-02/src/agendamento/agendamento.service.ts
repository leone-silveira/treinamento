import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { CreateAgendamentoDTO } from './dto/create-agendamento.dto';
import { PrismaService } from 'src/repository/prisma.service';

@Injectable()
export class AgendamentoService {
  constructor(private readonly prismaService: PrismaService) { }
  
  async createAgendamento(payload: CreateAgendamentoDTO) {
    const doctorExists = await this.prismaService.medico.findFirst({
      where: {
        id: payload.medicoId
      }
    })
    const patientExists = await this.prismaService.paciente.findFirst({
      where: {
        id: payload.pacienteId
      }
    })
    const hasTimeConflitPatient = await this.prismaService.consulta.findFirst({
      where: {
        pacienteId: payload.pacienteId,
        date: payload.date
      }
    })
    const hasTimeConflitDoctor = await this.prismaService.consulta.findFirst({
      where: {
        medicoId: payload.medicoId,
        date: payload.date
      }
    })
    const hasDuplicated = await this.prismaService.consulta.findFirst({
      where: {
        medicoId: payload.medicoId,
        pacienteId: payload.pacienteId,
        date: payload.date
      }
    })
    
    if (!doctorExists && !patientExists) return "Os IDs do médico e do paciente não existem"
    if (!doctorExists) return 'Esse ID do médico não existe'
    if (!patientExists) return 'Esse ID do paciente não existe'
    if (hasDuplicated) return 'Consulta já existe no banco de dados'
    if (hasTimeConflitDoctor) return 'Sinto muito, o médico tem uma consulta nesse hórario e data'
    if (hasTimeConflitPatient) return 'Sinto muito, o paciente tem uma consulta nesse hórario e data'
    
    return await this.prismaService.consulta.create({
      data: {
        date: payload.date,
        descricao: payload.descricao,
        medicoId : payload.medicoId,
        pacienteId: payload.pacienteId
      }
    })
  }

  async listAll() {
    return await this.prismaService.consulta.findMany();
  }
  
}
