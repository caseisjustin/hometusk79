import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreateExperienceDto {
  @IsNotEmpty()
  @IsString()
  company_name: string;

  @IsNotEmpty()
  @IsString()
  company_address: string;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsNotEmpty()
  @IsDate()
  start_time: Date;

  @IsNotEmpty()
  @IsDate()
  end_time: Date;

  @IsNotEmpty()
  @IsNumber()
  work_id: number;
}
