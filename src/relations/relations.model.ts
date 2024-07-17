import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Skill } from '../skills/skills.model';
import { SocialMedia } from '../social-media/social-media.model';
import { Education } from '../education/education.model';
import { Experience } from '../experience/experience.model';

@Table
export class Relation extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Experience)
  @Column
  experience_id: number;

  @ForeignKey(() => SocialMedia)
  @Column
  social_id: number;

  @ForeignKey(() => Education)
  @Column
  education_id: number;

  @ForeignKey(() => Skill)
  @Column
  skills_id: number;
}
