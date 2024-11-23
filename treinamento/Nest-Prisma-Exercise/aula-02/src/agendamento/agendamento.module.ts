import { Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
  exports: [AgendamentoService]
})
export class AgendamentoModule {}
