import { Controller, Get, Param } from "@nestjs/common";
import { FilesService } from "./files.service";

@Controller("files")
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  getFileList() {
    return this.filesService.getFileList();
  }

  @Get(":fileId/meta")
  getFileMeta(@Param("fileId") fileId: string): Record<string, unknown> {
    return this.filesService.getFileMeta(fileId);
  }

  //что-то странное на проверку #5

  @Get(":imgId/img")
  getImgPath(@Param("imgId") imgId: string) {
    return this.filesService.getImgPath(imgId);
  }

  //
}
