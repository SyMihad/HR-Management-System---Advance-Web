import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Organization } from "./organization.entity";

@Entity('UserOrganizationTable')
export class UserOrganizationTable{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    UserID: number;

    @Column({nullable:false})
    OrgID: number;

    @OneToOne(()=> User, user => user.userOrganizationTable)
    @JoinColumn({ name: "UserID" })
    user: User;

    @OneToOne(()=> Organization, organization => organization.userOrganizationTable)
    @JoinColumn({ name: "OrgID" })
    organization: Organization;

}