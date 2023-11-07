import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('UserOrganizationTable')
export class UserOrganizationTable{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    UserID: number;

    @Column({nullable:false})
    OrgID: number;

}