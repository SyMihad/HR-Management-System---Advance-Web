import { BadRequestException, Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentUploadDTO } from './dto/documentUploadDTO';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { FileInterceptor } from '@nestjs/platform-express';

const multerOptions: MulterOptions = {
  dest: './uploads/pdf',
  limits: {
    fileSize: 1024 * 1024 * 10, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  },
};

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  uploadDocument(@UploadedFile() file: Express.Multer.File){
      if (!file) {
        throw new BadRequestException('No file uploaded');
      }

      const data = {
        DocumentName : file.filename,
        userID : 67
      }
      return this.documentService.uploadDocument(data);
  }
}
