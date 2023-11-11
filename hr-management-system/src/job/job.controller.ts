import { Body, Controller, Get, Post, Put,  Param } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobRequirmentsDTO } from './dto/createJobRequirmentsDTO';
import { UpdateJobRequirmentsDTO } from './dto/updateJobRequirmentsDTO';
import { CreateJobApplicationDTO } from './dto/createJobApplicationDTO';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('createPost')
  createPost(@Body() jobRequirmentsDTO : CreateJobRequirmentsDTO){
    return this.jobService.createPost(jobRequirmentsDTO);
  }

  @Get('showJobPost/:id')
  showJobPost(@Param('id') id: number){
    return this.jobService.showJobPost(id);
  }

  @Put('updateJobPost/:id')
  updateJobPost(@Param('id') id: number, @Body() updateJobRequirmentsDTO: UpdateJobRequirmentsDTO){
    return this.jobService.updateJobPost(id, updateJobRequirmentsDTO);
  }

  @Get('showAllJobPost')
  showAllJobPost(){
    return this.jobService.showAllJobPost();
  }

  @Post('createJobApplication')
  createJobApplication(@Body() createJobApplicationDTO: CreateJobApplicationDTO){
    return this.jobService.createJobApplication(createJobApplicationDTO);
  }

  @Get('showAllJobApplication')
  showAllJobApplication(){
    return this.jobService.showAllJobApplication();
  }

  @Get('showJobApplication/:id')
  showJobApplication(@Param('id') id: number){
    return this.jobService.showJobApplication(id);
  }

  @Get('makeShortListed/:id')
  makeShortListed(@Param('id') id: number){
    return this.jobService.makeShortListed(id);
  }

  @Get('showAllShortListed')
  showAllShortListed(){
    return this.jobService.showAllShortListed();
  }

  @Get('makeSelected/:id')
  makeSelected(@Param('id') id: number){
    return this.jobService.makeSelected(id);
  }

  @Get('showAllSelected')
  showAllSelected(){
    return this.jobService.showAllSelected();
  }

  
}
