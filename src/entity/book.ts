import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import 'reflect-metadata';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  year!: number;

  @Column()
  publisher!: string;

  @Column()
  type!: string;

  @Column({ nullable: true })
  photo?: string;

  @Column({ default: true })
  avaliable!: boolean;
};
