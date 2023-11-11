import { IsNumber, IsString } from "class-validator";

export class CreateNoticeDTO{
    @IsString()
    Title: string;

    @IsString()
    Description: string;

    @IsNumber()
    SendFromUserId: number;

    @IsNumber()
    SendToUserId: number
}