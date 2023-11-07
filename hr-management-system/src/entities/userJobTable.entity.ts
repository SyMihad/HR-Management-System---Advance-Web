import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('UserJobTable')
export class UserJobTable{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    UserID: number;

    @Column({nullable:false})
    JobID: number;

}