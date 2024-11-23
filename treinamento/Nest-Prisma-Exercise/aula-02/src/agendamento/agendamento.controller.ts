import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { CreateAgendamentoDTO } from './dto/create-agendamento.dto';
import { get } from 'http';

@Controller('agendamento')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post()
  createAgendamento(@Body() createAgendamentoDTO: CreateAgendamentoDTO) {
    return this.agendamentoService.createAgendamento(createAgendamentoDTO);
  }

  @Get()
  listAll() {
    return this.agendamentoService.listAll();
  }
}
