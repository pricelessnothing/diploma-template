import { Controller, Get, Param } from "@nestjs/common";
import { FilesService } from "./files.service";
import { readFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";

@Controller("files")
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  getFileList() {
    return this.filesService.getFileList();
  }

  @Get(":fileId/meta")
  findOne(@Param("fileId") fileId: string): string {
    const xmlData = readFileSync(`data/${fileId}/${fileId}.xml`, "utf8");
    const parser = new XMLParser();
    const jObj = parser.parse(xmlData);
    return jObj;
  }
}
