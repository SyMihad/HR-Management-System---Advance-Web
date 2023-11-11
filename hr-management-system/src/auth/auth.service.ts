import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Authorization } from 'src/entities/authorization.entity';
import { User } from 'src/entities/user.entity';
import { Repository, getRepository } from 'typeorm';
import { CreateSuperAdminDTO } from './dto/createSuperAdminDTO';
import { CreateOrganizationDTO } from './dto/createOrganizationDTO';
import { Organization } from 'src/entities/organization.entity';
import { JobCategories } from 'src/entities/jobCategories.entity';
import { UserOrganizationTable } from 'src/entities/userOrganizationTable.entity';
import { CreateJobCategoryDTO } from './dto/createJobCategoryDTO';
import { CreateEmployeeDTO } from './dto/createEmployeeDTO';
import { UserJobTable } from 'src/entities/userJobTable.entity';
import { Console } from 'console';
import { LoginDTO } from './dto/loginDTO';
import { UpdateOrganizationDTO } from './dto/updateOrganizationDTO';
import { UpdateSuperAdminDTO } from './dto/updateSuperAdminDTO';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepo: Repository<User>,
        @InjectRepository(Authorization) 
        private readonly authRepo: Repository<Authorization>,
        @InjectRepository(Organization)
        private readonly orgRepo: Repository<Organization>,
        @InjectRepository(JobCategories)
        private readonly jobCategoriesRepo: Repository<JobCategories>,
        @InjectRepository(UserOrganizationTable)
        private readonly userOrganizationTableRepo: Repository<UserOrganizationTable>,
        @InjectRepository(UserJobTable)
        private readonly userJobTableRepo: Repository<UserJobTable>
        ){}

        async createSuperAdmin(createUserDTO: CreateSuperAdminDTO){
            const user1 = {
                Name: createUserDTO.Name,
                Email: createUserDTO.Email,
                Gender: createUserDTO.Gender,
                DOB: createUserDTO.DOB,
                PhoneNum: createUserDTO.PhoneNum,
                Password: createUserDTO.Password
            }
            const user = await this.userRepo.save(user1);
            const auth1 = {
                role: "Super_Admin",
                user: user
            }

            const auth = await this.authRepo.save(auth1);
            //await this.userRepo.save(user);
            //await this.authRepo.save(auth);
            return true;
        }

        async updateSuperAdmin(id: number, updateSuperAdminDTO: UpdateSuperAdminDTO){
            return await this.userRepo.update(id, updateSuperAdminDTO);
        }

        async deleteUser(id: number){
            return await this.userRepo.delete(id);
        }

        async showProfile(id: number){
            return await this.userRepo.findOne({where: {id: id}});
        }

        async createOrganization(createOrganizationDTO: CreateOrganizationDTO){
            const org = await this.orgRepo.create(createOrganizationDTO);
            return await this.orgRepo.save(org);
        }

        async updateOrganization(id: number , updateOrganizationDTO: UpdateOrganizationDTO){
            return await this.orgRepo.update(id, updateOrganizationDTO);
        }

        async deleteOrganization(id: number){
            return await this.orgRepo.delete(id);
        }

        async createJobCategory(createJobCategoryDTO: CreateJobCategoryDTO){
            const jobCategory = await this.jobCategoriesRepo.create(createJobCategoryDTO);
            return await this.jobCategoriesRepo.save(jobCategory);
        }

        async createEmployee(createEmployeeDTO: CreateEmployeeDTO){
            const user1 = {
                Name: createEmployeeDTO.Name,
                Email: createEmployeeDTO.Email,
                Gender: createEmployeeDTO.Gender,
                DOB: createEmployeeDTO.DOB,
                PhoneNum: createEmployeeDTO.PhoneNum,
                Password: createEmployeeDTO.Password
            }
            //const user = await this.userRepo.create(user1);
            const user = await this.userRepo.save(user1);

            const auth1 = {
                role: "Employee",
                user: user
            }

            const auth = await this.authRepo.save(auth1);

            const jobCategory = await this.jobCategoriesRepo.findOne({where: {Name: createEmployeeDTO.JobCategory}})
            //console.log(jobCategory);

            const userJob = {
                user: user,
                jobCategory: jobCategory
            }

            //const userJobTable = await this.userJobTableRepo.create(userJob);
            const userJobTable = await this.userJobTableRepo.save(userJob);

            const org = await this.orgRepo.findOne({where: {id: 1}});

            const userOrg = {
                user: user,
                organization: org
            }

            //const userOrganizationTable = await this.userOrganizationTableRepo.create(userOrg);
            const userOrganizationTable = await this.userOrganizationTableRepo.save(userOrg);

            //await this.userOrganizationTableRepo.save(userOrganizationTable);
            //await this.userJobTableRepo.save(userJobTable);
            return true;
        }


        async createManager(createManagerDTO: CreateEmployeeDTO){
            const user1 = {
                Name: createManagerDTO.Name,
                Email: createManagerDTO.Email,
                Gender: createManagerDTO.Gender,
                DOB: createManagerDTO.DOB,
                PhoneNum: createManagerDTO.PhoneNum,
                Password: createManagerDTO.Password
            }
            
            const user = await this.userRepo.save(user1);

            const auth1 = {
                role: "Manager",
                user: user
            }

            const auth = await this.authRepo.save(auth1);

            const jobCategory = await this.jobCategoriesRepo.findOne({where: {Name: createManagerDTO.JobCategory}})

            const userJob = {
                user: user,
                jobCategory: jobCategory
            }

            const userJobTable = await this.userJobTableRepo.save(userJob);

            const org = await this.orgRepo.findOne({where: {id: 1}});

            const userOrg = {
                user: user,
                organization: org
            }

            const userOrganizationTable = await this.userOrganizationTableRepo.save(userOrg);

            // const organizationId =1;

            // const usersForOrganization = await this.userOrganizationTableRepo.find({where: {organization: org}, relations: {user: true}});

            // console.log(usersForOrganization);

            return "Manager Created";
        }

        async login(loginDTO: LoginDTO){
            const user = await this.userRepo.findOne({where: {Email: loginDTO.Email}});

            console.log(user);
            if(user.Password == loginDTO.Password){
                return "Logged In";
            }

            return "False";
        }

        async loginOrganization(loginDTO: LoginDTO){
            const user = await this.orgRepo.findOne({where: {Email: loginDTO.Email}});

            console.log(user);
            if(user.Password == loginDTO.Password){
                return "Logged In";
            }

            return "False";
        }


}
