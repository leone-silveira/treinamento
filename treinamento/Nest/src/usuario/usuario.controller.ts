import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/createUsuario.dto';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDTO } from './dto/updateUsuario.dto';

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {
    }
    
    @Get()
    listAll() {
        return this.usuarioService.listAll();
    }

    @Post()
    createUser(@Body() body: CreateUsuarioDTO) {
        return this.usuarioService.createUsuario(body);
    }
    
    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUsuarioDTO) {
        return this.usuarioService.updateUsuario(id, body);
    }
}