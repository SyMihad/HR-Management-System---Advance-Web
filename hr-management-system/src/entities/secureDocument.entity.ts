import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DocumentTrack } from "./documentTrack.entity";

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

    @OneToMany(()=> DocumentTrack, documentTrack => documentTrack.secureDocument)
    documentTracks: DocumentTrack[];

}