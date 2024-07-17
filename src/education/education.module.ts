import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { Education } from './education.model';

@Module({
  imports: [SequelizeModule.forFeature([Education])],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
