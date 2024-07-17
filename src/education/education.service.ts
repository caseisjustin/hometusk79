import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Education } from './education.model';
import { CreateEducationDto } from './dto/create-education.dto';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education)
    private readonly educationModel: typeof Education,
  ) {}

  async create(createEducationDto: CreateEducationDto): Promise<Education> {
    return this.educationModel.create({ ...createEducationDto });
  }

  async findAll(): Promise<Education[]> {
    return this.educationModel.findAll();
  }

  async findOne(id: number): Promise<Education> {
    return this.educationModel.findOne({ where: { id } });
  }

  async update(id: number, updateEducationDto: CreateEducationDto): Promise<Education> {
    const [affectedCount, affectedRows] = await this.educationModel.update(
      { ...updateEducationDto },
      { where: { id }, returning: true }
    );
    return affectedRows[0];
  }
  
  async remove(id: number): Promise<void> {
    const education = await this.findOne(id);
    await education.destroy();
  }
}
