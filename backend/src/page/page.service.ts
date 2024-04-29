import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { existsSync, unlinkSync } from 'fs';
import * as bcrypt from 'bcrypt';
import { ApiResponse } from 'src/common/dto/api-response.dto';


@Injectable()
export class PageService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(createPageDto: CreatePageDto, authUser: User) {
    const { email, password, name, description } = createPageDto
    //is email taken
    const user = await this.prismaService.user.findFirst({
      where: {
        email
      }
    })
    if (user) {
      // this.removeFile(file.path)
      throw new UnprocessableEntityException(`This email ${email} has already taken`)
    }
    //is page exist with this name
    const page = await this.prismaService.page.findFirst({
      where: {
        name
      }
    })
    if (page) {
      // this.removeFile(file.path)
      throw new UnprocessableEntityException(`Page with this name ${name} already exist`)
    }
    //adding new page

    return new ApiResponse(null, "Page Created Successfully")
  }

  findAll() {
    return `This action returns all page`;
  }

  findOne(id: number) {
    return `This action returns a #${id} page`;
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }


  /*Function to remove file */
  private removeFile(filePath: string): void {
    if (existsSync(filePath)) {
      unlinkSync(filePath);
    }
  }

  /* Create Password*/
  private async createPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }
}
