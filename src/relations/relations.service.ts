import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Relation } from './relations.model';
import { CreateRelationDto } from './dto/create-relation.dto';

@Injectable()
export class RelationsService {
  constructor(
    @InjectModel(Relation)
    private readonly relationModel: typeof Relation,
  ) { }

  async create(createRelationDto: CreateRelationDto): Promise<Relation> {
    return this.relationModel.create({ ...createRelationDto });
  }

  async findAll(): Promise<Relation[]> {
    return this.relationModel.findAll();
  }

  async findOne(id: number): Promise<Relation> {
    return this.relationModel.findOne({ where: { id } });
  }

  async update(id: number, updateRelationDto: CreateRelationDto): Promise<Relation> {
    const [affectedCount, affectedRows] = await this.relationModel.update(
      {...updateRelationDto},
      {where: {id}, returning: true}
    )
    return affectedRows[0];
  }

  async remove(id: number): Promise<void> {
    const relation = await this.findOne(id);
    await relation.destroy();
  }
}
