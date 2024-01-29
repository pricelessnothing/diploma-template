import "reflect-metadata";
import { INestApplication } from "@nestjs/common";
import { CorsOptionsCallback } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";

import { Request } from "express";

import { AppModule } from "@diploma/backend/app/app.module";

export const APP_PORT = 3000;

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  const error: unknown = undefined;
  app.enableCors((req: Request, cb: CorsOptionsCallback): void =>
    cb(error as Error, {
      origin: req.get("origin"),
      credentials: true,
    }),
  );

  await app.listen(APP_PORT);

  console.info("Server up and running...");
}

bootstrap().catch((e: Error) => console.error(e));
