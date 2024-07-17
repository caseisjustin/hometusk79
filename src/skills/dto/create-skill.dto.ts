import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  @IsString()
  hard_skills: string;

  @IsNotEmpty()
  @IsString()
  soft_skills: string;

  @IsNotEmpty()
  @IsString()
  language: string;
}
