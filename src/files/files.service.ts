import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './files.model';
import { CreateFileDto } from './dto/create-file.dto';

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File)
    private readonly fileModel: typeof File,
  ) {}

  async create(file: Express.Multer.File): Promise<File> {
    return this.fileModel.create({data: file.filename, file_name: file.filename, is_active: false});
  }

  async findOne(id: number): Promise<File> {
    return this.fileModel.findOne({ where: { id } });
  }

  async update(id: number, updateFileDto: CreateFileDto): Promise<File> {
    const [affectedCount, affectedRows] = await this.fileModel.update(
      {...updateFileDto },
      {where: { id }, returning: true }
    )
    return affectedRows[0];
  }

  async remove(id: number): Promise<void> {
    const file = await this.findOne(id);
    await file.destroy();
  }
}
