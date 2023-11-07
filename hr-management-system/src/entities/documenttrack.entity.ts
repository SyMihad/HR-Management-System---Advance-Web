import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('DocumentTrack')
export class DocumentTrack{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    DocID: number;

    @Column({nullable:false})
    UserID: number;

}