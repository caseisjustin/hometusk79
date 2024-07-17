import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { File } from 'src/files/files.model';

@Table
export class Education extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  title: string;

  @Column
  start_time: Date;

  @Column
  end_time: number;

  @Column
  position: string;

  @Column
  faculty: number;

  @Column
  description: string;

  @Column
  is_active: boolean;

  @ForeignKey(()=>File)
  @Column
  education_logo_id: number
}
