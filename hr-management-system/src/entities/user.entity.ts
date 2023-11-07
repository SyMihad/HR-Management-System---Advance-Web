import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    Name: string;

    @Column({nullable:false})
    Email: string;

    @Column({nullable:false})
    Gender: string;

    @Column({nullable:false})
    DOB: Date;

    @Column({nullable:false})
    PhoneNum: string;

    @Column({nullable:false})
    Password: string;

}