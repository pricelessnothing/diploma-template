import { Injectable } from "@nestjs/common";
import { readdirSync } from "fs";

const DIR_NAME = process.cwd();

@Injectable()
export class FilesService {
  getFileList() {
    return readdirSync(DIR_NAME);
  }
}
