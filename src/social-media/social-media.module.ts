import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SocialMediaService } from './social-media.service';
import { SocialMediaController } from './social-media.controller';
import { SocialMedia } from './social-media.model';

@Module({
  imports: [SequelizeModule.forFeature([SocialMedia])],
  controllers: [SocialMediaController],
  providers: [SocialMediaService],
})
export class SocialMediaModule {}
