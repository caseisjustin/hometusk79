import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { Skill } from './skills.model';

@Module({
  imports: [SequelizeModule.forFeature([Skill])],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
