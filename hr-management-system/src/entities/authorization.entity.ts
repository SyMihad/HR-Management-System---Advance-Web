import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Authorizations')
export class Authorization{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    userID: number;

    @Column({nullable:false})
    role: string;

    @OneToOne(()=> User, user => user.authorization)
    @JoinColumn({ name: 'userID' })
    user: User;

}