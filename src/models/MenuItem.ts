import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

@Table({
  tableName: 'menu_items',
  timestamps: true,
})
export class MenuItem extends Model<
  InferAttributes<MenuItem>, // todos os atributos de instância
  InferCreationAttributes<MenuItem> // atributos necessários na criação
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: CreationOptional<number>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string | null;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  category?: string | null;
}
