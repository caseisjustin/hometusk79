import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { Experience } from './experience.model';

@Module({
  imports: [SequelizeModule.forFeature([Experience])],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
