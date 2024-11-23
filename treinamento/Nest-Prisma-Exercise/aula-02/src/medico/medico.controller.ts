import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDTO } from './dto/create-medico.dto';
import { UpdateMedicoDTO } from './dto/update-medico.dto';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDTO) {
    return this.medicoService.createMedico(createMedicoDto);
  }

  @Get()
  listAll() {
    return this.medicoService.listAll();
  }
  @Put('/:id')
  updateMedico(@Param('id') id: string, @Body() body: UpdateMedicoDTO) {
      return this.medicoService.updateMedico(id, body);
  }
  @Delete('/:id')
  deleteMedico(@Param('id') id: string) {
      return this.medicoService.deleteMedico(id);
  }
}
