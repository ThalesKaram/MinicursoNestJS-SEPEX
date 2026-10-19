/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTarefaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  titulo: string;
}
