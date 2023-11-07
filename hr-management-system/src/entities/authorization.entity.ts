import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Authorizations')
export class Authorization{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    userID: number;

    @Column({nullable:false})
    role: string;

}