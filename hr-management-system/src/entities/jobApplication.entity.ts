import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('JobApplications')
export class JobApplication{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Name: string;

    @Column({nullable:false})
    Email: string;

    @Column({nullable:false})
    PhoneNo: string;

    @Column({nullable:true})
    Address: string;

    @Column({nullable:false})
    UploadFileName: string;

    @Column({nullable:false})
    JobID: number;

    @Column({nullable:false})
    Status: string;

}