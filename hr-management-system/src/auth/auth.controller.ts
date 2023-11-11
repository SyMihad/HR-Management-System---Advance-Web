import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSuperAdminDTO } from './dto/createSuperAdminDTO';
import { CreateOrganizationDTO } from './dto/createOrganizationDTO';
import { CreateJobCategoryDTO } from './dto/createJobCategoryDTO';
import { CreateEmployeeDTO } from './dto/createEmployeeDTO';
import { LoginDTO } from './dto/loginDTO';
import { UpdateOrganizationDTO } from './dto/updateOrganizationDTO';
import { UpdateSuperAdminDTO } from './dto/updateSuperAdminDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('createSuperAdmin')
  createSuperAdmin(@Body() createUserDTOAuth: CreateSuperAdminDTO){
    return this.authService.createSuperAdmin(createUserDTOAuth);
  }

  @Put('updateSuperAdmin/:id')
  updateSuperAdmin(@Param('id') id: number, @Body() updateSuperAdminDTO: UpdateSuperAdminDTO){
    return this.authService.updateSuperAdmin(id, updateSuperAdminDTO);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id') id: number){
    return this.authService.deleteUser(id);
  }

  @Get('showProfile/:id')
  showProfile(@Param('id') id: number){
    return this.authService.showProfile(id);
  }

  @Post('createOrganization')
  createOrganization(@Body() createOrganizationDTO: CreateOrganizationDTO){
    return this.authService.createOrganization(createOrganizationDTO);
  }

  @Put('updateOrganization/:id')
  updateOrganization(@Param('id') id: number, @Body() updateOrganizationDTO: UpdateOrganizationDTO){
    return this.authService.updateOrganization(id, updateOrganizationDTO);
  }

  @Delete('deleteOrganization/:id')
  deleteOrganization(@Param('id') id: number){
    return this.authService.deleteOrganization(id);
  }

  @Post('createJobCategory')
  createJobCategory(@Body() createJobCategoryDTO: CreateJobCategoryDTO){
    return this.authService.createJobCategory(createJobCategoryDTO);
  }

  @Post('createEmployee')
  createEmployee(@Body() createEmployeeDTO: CreateEmployeeDTO){
    return this.authService.createEmployee(createEmployeeDTO);
  }

  @Post('createManager')
  createManager(@Body() createManagerDTO: CreateEmployeeDTO){
    return this.authService.createManager(createManagerDTO);
  }

  @Post('login')
  login(@Body() loginDTO: LoginDTO){
    return this.authService.login(loginDTO);
  }

  @Post('login/organization')
  loginOrganization(@Body() loginDTO: LoginDTO){
    return this.authService.loginOrganization(loginDTO);
  }
}
