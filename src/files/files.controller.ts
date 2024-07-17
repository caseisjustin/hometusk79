import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, UseGuards, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { diskStorage } from 'multer';

@Controller('file')
// @UseGuards(JwtAuthGuard)
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post("fileupload")
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: "./uploads",
      filename(req, file, cb){
        cb(null, file.originalname)
      }
    }),
    fileFilter(req, file, cb){
      // const mimetypes = ["image/png", "application/json"]
      // const filemimtype = file.mimetype
      // if(!mimetypes.includes(filemimtype)){
      //   return cb(new BadRequestException, false)
      // }
      cb(null, true)
    }
  }))
  create(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.create(file);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: CreateFileDto) {
    return this.fileService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
