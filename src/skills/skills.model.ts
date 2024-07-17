import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Skill extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  hard_skills: string;

  @Column
  soft_skills: string;

  @Column
  language: string;
}
