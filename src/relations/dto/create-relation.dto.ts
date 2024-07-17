import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRelationDto {
  @IsNotEmpty()
  @IsNumber()
  experience_id: number;

  @IsNotEmpty()
  @IsNumber()
  social_id: number;

  @IsNumber()
  education_id: number;

  @IsNotEmpty()
  @IsNumber()
  skills_id: number;
}
