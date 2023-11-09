import { Column, Entity, PrimaryGeneratedColumn, OneToOne,  JoinColumn} from "typeorm";
import { NoticeDescription } from "./noticeDescription.entity";

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

    @OneToOne(()=> NoticeDescription, NoticeDescription => NoticeDescription.noticeTrack)
    @JoinColumn({ name: "NoticeID" })
    noticeDescription: NoticeDescription;

}