import { IsNotEmpty, IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsDate()
  start_time: Date;

  @IsNotEmpty()
  @IsNumber()
  end_time: number;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsNotEmpty()
  @IsNumber()
  faculty: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;
}
