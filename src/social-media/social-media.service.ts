import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SocialMedia } from './social-media.model';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';

@Injectable()
export class SocialMediaService {
  constructor(
    @InjectModel(SocialMedia)
    private readonly socialMediaModel: typeof SocialMedia,
  ) {}

  async create(createSocialMediaDto: CreateSocialMediaDto): Promise<SocialMedia> {
    return this.socialMediaModel.create({...createSocialMediaDto});
  }

  async findAll(): Promise<SocialMedia[]> {
    return this.socialMediaModel.findAll();
  }

  async findOne(id: number): Promise<SocialMedia> {
    return this.socialMediaModel.findOne({ where: { id } });
  }

  async update(id: number, updateSocialMediaDto: CreateSocialMediaDto): Promise<SocialMedia> {
    const [affectedCount, affectedRows] = await this.socialMediaModel.update(
      {...updateSocialMediaDto},
      {where: {id}, returning: true}
    )
    return affectedRows[0];
  }

  async remove(id: number): Promise<void> {
    const socialMedia = await this.findOne(id);
    await socialMedia.destroy();
  }
}
