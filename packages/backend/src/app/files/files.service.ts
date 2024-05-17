import { Injectable } from "@nestjs/common";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { XMLParser, XMLBuilder } from "fast-xml-parser";

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

  updateFileMeta(fileId: string, _body: Record<string, any>) {
    const xmlData = readFileSync(`data/${fileId}/${fileId}.xml`, "utf8");
    const parser = new XMLParser();
    const jObj = parser.parse(xmlData) as Record<string, any>;
    jObj.SPP_ROOT = _body;
    const builder = new XMLBuilder();
    const xmlContent = builder.build(jObj) as string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(typeof xmlContent);
    return writeFileSync(`data/${fileId}/${fileId}.xml`, xmlContent);
  }

  getImgPath(imgId: string) {
    const numberOfImg = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ];

    const imgPathArr = [];

    for (let i = 0; i < numberOfImg.length; i++) {
      imgPathArr[i] = `${imgId}/png/${imgId}_${numberOfImg[i]}/img/${imgId}_${numberOfImg[i]}.png`;
    }
    return imgPathArr;
  }

  getImgCloudPath(imgId: string) {
    const numberOfImg = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ];

    const imgCloudPathArr = [];

    for (let i = 0; i < numberOfImg.length; i++) {
      imgCloudPathArr[i] = `${imgId}/png/${imgId}_${numberOfImg[i]}/mask_cloud/${imgId}_${numberOfImg[i]}_cloud.png`;
    }
    return imgCloudPathArr;
  }

  getImgFogPath(imgId: string) {
    const numberOfImg = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ];

    const imgFogPathArr = [];

    for (let i = 0; i < numberOfImg.length; i++) {
      imgFogPathArr[i] = `${imgId}/png/${imgId}_${numberOfImg[i]}/mask_fog/${imgId}_${numberOfImg[i]}_fog.png`;
    }
    return imgFogPathArr;
  }
}
