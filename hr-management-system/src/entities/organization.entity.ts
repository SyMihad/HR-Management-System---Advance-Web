import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { UserOrganizationTable } from "./userOrganizationTable.entity";

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


    @OneToOne(()=> UserOrganizationTable, userOrganizationTable => userOrganizationTable.organization)
    userOrganizationTable: UserOrganizationTable;
}