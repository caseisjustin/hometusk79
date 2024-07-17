import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Experience } from './experience.model';
import { CreateExperienceDto } from './dto/create-experience.dto';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience)
    private readonly experienceModel: typeof Experience,
  ) {}

  async create(createExperienceDto: CreateExperienceDto): Promise<Experience> {
    return this.experienceModel.create({...createExperienceDto});
  }

  async findAll(): Promise<Experience[]> {
    return this.experienceModel.findAll();
  }

  async findOne(id: number): Promise<Experience> {
    return this.experienceModel.findOne({ where: { id } });
  }

  async update(id: number, updateExperienceDto: CreateExperienceDto): Promise<Experience> {
    const [affectedCount, affectedRows] = await this.experienceModel.update(
      {...updateExperienceDto},
      {where: {id}, returning: true}
    )
    return affectedRows[0];
  }

  async remove(id: number): Promise<void> {
    const experience = await this.findOne(id);
    await experience.destroy();
  }
}
