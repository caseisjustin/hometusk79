import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateWorkDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;
}
