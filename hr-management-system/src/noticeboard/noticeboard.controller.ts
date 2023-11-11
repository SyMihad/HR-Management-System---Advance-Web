import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { NoticeboardService } from './noticeboard.service';
import { CreateNoticeDTO } from './dto/createNoticeDTO';

@Controller('noticeboard')
export class NoticeboardController {
  constructor(private readonly noticeboardService: NoticeboardService) {}

  @Post('createNotice')
  createNotice(@Body() createNoticeDTO : CreateNoticeDTO){
    return this.noticeboardService.createNotice(createNoticeDTO);
  }

  @Get('viewNotice/:id')
  viewNotice(@Param('id') id: number){
    return this.noticeboardService.viewNotice(id);
  }

  @Get('viewAllNotice/:id')
  viewAllNotice(@Param('id') id: number){
    return this.noticeboardService.viewAllNotice(id);
  }
}
