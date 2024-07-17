import { Module } from '@nestjs/common';
import { FileService } from './files.service';
import { FileController } from './files.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './files.model';

@Module({
  imports: [SequelizeModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService],
})
export class FilesModule {}
