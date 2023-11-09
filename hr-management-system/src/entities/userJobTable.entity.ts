import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { JobCategories } from "./jobCategories.entity";

@Entity('UserJobTable')
export class UserJobTable{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    UserID: number;

    @Column({nullable:false})
    JobID: number;

    @OneToOne(()=> User, user => user.userJobTable)
    @JoinColumn({ name: "UserID" })
    user: User;

    @OneToOne(()=> JobCategories, jobCategories => jobCategories.userJobTable)
    @JoinColumn({ name: "JobID" })
    jobCategories: JobCategories;

}