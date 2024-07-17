import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { Work } from './work.model';

@Module({
  imports: [SequelizeModule.forFeature([Work])],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
