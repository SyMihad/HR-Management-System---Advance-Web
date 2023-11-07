import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('SecureDocuments')
export class SecureDocument{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    DocumentName: string;

    @Column({nullable:false})
    UploadDate: Date;

    @Column({nullable:false})
    HashKey: string;

}