import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('JobRequirments')
export class JobRequirments{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Title: string;

    @Column({nullable:false})
    Description: string;

    @Column({nullable:false})
    JobID: number;

    @Column({nullable:false})
    SubmissionDate: Date;

    @Column({nullable:false})
    CloseDate: Date;

    @Column({nullable:false})
    Status: string;

}