import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RelationsService } from './relations.service';
import { RelationsController } from './relations.controller';
import { Relation } from './relations.model';

@Module({
  imports: [SequelizeModule.forFeature([Relation])],
  controllers: [RelationsController],
  providers: [RelationsService],
})
export class RelationsModule {}
