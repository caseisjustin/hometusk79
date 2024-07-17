import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Work extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  description: string;

  @Column
  is_active: boolean;
}
