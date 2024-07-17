import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class SocialMedia extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  title: string;

  @Column
  link: string;

  @Column
  is_active: boolean;

  @Column
  account_name: string;
}
