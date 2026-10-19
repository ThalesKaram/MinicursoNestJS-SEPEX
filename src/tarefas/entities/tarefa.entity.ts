import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('tarefas')
export class Tarefa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  titulo: string;
}
