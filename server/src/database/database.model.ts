import {Column, Model, Table} from "sequelize-typescript";

@Table
export class Database extends Model{
    @Column
    name: string
}