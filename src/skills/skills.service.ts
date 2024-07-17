import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Skill } from './skills.model';
import { CreateSkillDto } from './dto/create-skill.dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skill)
    private readonly skillModel: typeof Skill,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    return this.skillModel.create({...createSkillDto});
  }

  async findAll(): Promise<Skill[]> {
    return this.skillModel.findAll();
  }

  async findOne(id: number): Promise<Skill> {
    return this.skillModel.findOne({ where: { id } });
  }

  async update(id: number, updateSkillDto: CreateSkillDto): Promise<Skill> {
    const [affectedCount, affectedRows] = await this.skillModel.update(
      {...updateSkillDto},
      {where: {id}, returning: true}
    )
    return affectedRows[0];
  }

  async remove(id: number): Promise<void> {
    const skill = await this.findOne(id);
    await skill.destroy();
  }
}
