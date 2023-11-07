import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Organizations')
export class Organization{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Name: string;

    @Column({nullable:false})
    Email: string;

    @Column({nullable:false})
    Password: string;

}