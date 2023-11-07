import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('JobCategories')
export class JobCategories{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Name: string;

}