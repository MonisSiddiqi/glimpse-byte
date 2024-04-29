import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, FileTypeValidator, UploadedFile, ParseFilePipe, UseGuards } from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { Role, User } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';


@Controller('page')
@UseGuards(RolesGuard)
@Roles(Role.CONTENT_CREATOR)
export class PageController {
  constructor(private readonly pageService: PageService) { }

  @Post()
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: path.join('uploads', 'pages'),
  //       filename: (_, file, cb) => {
  //         const filename = uuidv4();
  //         cb(null, `${filename}${extname(file.originalname)}`);
  //       },
  //     }),
  //   }),
  // )
  create(@Body() createPageDto: CreatePageDto,/* @UploadedFile(new ParseFilePipe({ fileIsRequired: true, validators: [new FileTypeValidator({ fileType: "image\/(png|jpe?g)" })] })) file: Express.Multer.File, */ @GetUser() authUser: User) {
    return this.pageService.create(createPageDto, authUser);
  }

  @Get()
  findAll() {
    return this.pageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pageService.update(+id, updatePageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageService.remove(+id);
  }
}
