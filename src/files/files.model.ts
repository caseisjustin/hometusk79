import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class File extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  data: string;

  @Column
  file_name: string;

  @Column
  is_active: boolean
}
