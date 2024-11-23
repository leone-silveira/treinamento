import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RepositoryModule } from './repository/repository.module';
import { PacienteController } from './paciente/paciente.controller';
import { PacienteService } from './paciente/paciente.service';
import { MedicoModule } from './medico/medico.module';
import { MedicoController } from './medico/medico.controller';
import { MedicoService } from './medico/medico.service';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { AgendamentoService } from './agendamento/agendamento.service';
import { AgendamentoController } from './agendamento/agendamento.controller';

@Module({
  imports: [PacienteModule, UsuarioModule, RepositoryModule, MedicoModule, AgendamentoModule],
  controllers: [AppController, UsuarioController, PacienteController,MedicoController,AgendamentoController],
  providers: [AppService, UsuarioService, PacienteService,MedicoService,AgendamentoService],
})
export class AppModule {}
