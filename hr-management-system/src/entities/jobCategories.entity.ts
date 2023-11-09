import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobApplication } from "./jobApplication.entity";
import { JobRequirments } from "./jobRequirments.entity";
import { UserJobTable } from "./userJobTable.entity";

@Entity('JobCategories')
export class JobCategories{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Name: string;

    @OneToOne(()=> JobApplication, jobApplication => jobApplication.jobCategories)
    jobApplication: JobApplication;

    @OneToOne(()=> JobRequirments, jobRequirments => jobRequirments.jobCategories)
    jobRequirments: JobRequirments;

    @OneToOne(()=> UserJobTable, userJobTable => userJobTable.user)
    userJobTable: UserJobTable;

}