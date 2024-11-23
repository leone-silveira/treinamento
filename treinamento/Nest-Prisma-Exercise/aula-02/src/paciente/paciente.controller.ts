import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDTO } from './dto/create-paciente.dto';
import { UpdatePacienteDTO } from './dto/update-paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) { }

  @Post()
  createUser(@Body() body: CreatePacienteDTO) {
    return this.pacienteService.createPaciente(body);
  }

  @Get()
  listAll() {
    return this.pacienteService.listAll();
  }

  @Put('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdatePacienteDTO) {
        return this.pacienteService.updatePaciente(id, body);
    }

  @Delete('/:id')
    deletePaciente(@Param('id') id: string) {
        return this.pacienteService.deletePaciente(id);
    }
}
