import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateFileDto {
  @IsNotEmpty()
  @IsString()
  data: string;

  @IsNotEmpty()
  @IsString()
  file_name: string

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;
}
