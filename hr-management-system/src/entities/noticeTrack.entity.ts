import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('NoticeTrack')
export class NoticeTrack{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    NoticeID: number;

    @Column({nullable:false})
    SendFromUserID: number;

    @Column({nullable:false})
    SendToUserID: number;

    @Column({nullable:false})
    Status: string;

}