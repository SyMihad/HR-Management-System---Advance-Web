import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('NoticeDescription')
export class NoticeDescription{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Title: string;

    @Column({nullable:false})
    Description: string;

}