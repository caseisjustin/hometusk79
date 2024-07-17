import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateSocialMediaDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  link: string;

  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean;

  @IsNotEmpty()
  @IsString()
  account_name: string;
}
