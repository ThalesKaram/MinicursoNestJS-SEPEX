/* eslint-disable @typescript-eslint/no-floating-promises */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Tarefa } from './entities/tarefa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefa)
    private readonly tarefaRepository: Repository<Tarefa>,
  ) {}

  create(createTarefaDto: CreateTarefaDto) {
    const tarefa = this.tarefaRepository.create(createTarefaDto);
    return this.tarefaRepository.save(tarefa);
  }

  findAll() {
    return this.tarefaRepository.find();
  }

  async findOne(id: number) {
    const tarefa = await this.tarefaRepository.findOneBy({ id });
    if (!tarefa) {
      throw new NotFoundException(`Tarefa ${id} não encontrada`);
    }
    return tarefa;
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    const tarefa = await this.findOne(id);
    this.tarefaRepository.merge(tarefa, updateTarefaDto);
    return this.tarefaRepository.save(tarefa);
  }

  async remove(id: number) {
    const tarefa = await this.findOne(id);
    await this.tarefaRepository.remove(tarefa);
    return { mensagem: `Tarefa ${id} removida` };
  }
}
