import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Work } from '../work/work.model';

@Table
export class Experience extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  company_name: string;

  @Column
  company_address: string;

  @Column
  position: string;

  @Column
  start_time: Date;

  @Column
  end_time: Date;

  @ForeignKey(() => Work)
  @Column
  work_id: number;
}
