import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefasModule } from './tarefas/tarefas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tarefas_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TarefasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
