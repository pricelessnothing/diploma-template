import { Injectable } from "@nestjs/common";
import { readdirSync, readFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";

const DIR_NAME = "data";

@Injectable()
export class FilesService {
  getFileList() {
    return readdirSync(DIR_NAME);
  }

  getFileMeta(fileId: string) {
    const xmlData = readFileSync(`data/${fileId}/${fileId}.xml`, "utf8");
    const parser = new XMLParser();
    const jObj = parser.parse(xmlData) as Record<string, unknown>;
    return jObj;
  }
}
