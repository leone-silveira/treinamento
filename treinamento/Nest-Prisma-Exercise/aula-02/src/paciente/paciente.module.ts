import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],

})
export class PacienteModule {}
