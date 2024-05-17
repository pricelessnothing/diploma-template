import { Controller, Get, Param, Post, Body } from "@nestjs/common";
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

  @Get(":imgId/img")
  getImgPath(@Param("imgId") imgId: string) {
    return this.filesService.getImgPath(imgId);
  }

  @Get(":imgId/cloud")
  getImgCloudPath(@Param("imgId") imgId: string) {
    return this.filesService.getImgCloudPath(imgId);
  }

  @Get(":imgId/fog")
  getImgFogPath(@Param("imgId") imgId: string) {
    return this.filesService.getImgFogPath(imgId);
  }

  @Post(":fileId/meta")
  createPost(@Body() body: Record<string, any>, @Param("fileId") fileId: string) {
    this.filesService.updateFileMeta(fileId, body);
  }
}
