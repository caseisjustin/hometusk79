import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Work } from './work.model';
import { CreateWorkDto } from './dto/create-work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work)
    private readonly workModel: typeof Work,
  ) {}

  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    return this.workModel.create({...createWorkDto});
  }

  async findAll(): Promise<Work[]> {
    return this.workModel.findAll();
  }

  async findOne(id: number): Promise<Work> {
    return this.workModel.findOne({ where: { id } });
  }

  async update(id: number, updateWorkDto: CreateWorkDto): Promise<Work> {
    const [affectedCount, affectedRows] = await this.workModel.update(
      {...updateWorkDto },
      {where: { id }, returning: true }
    )
    return affectedRows[0];
  }

  async remove(id: number): Promise<void> {
    const work = await this.findOne(id);
    await work.destroy();
  }
}
