import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { join } from 'node:path';

import { configValidationSchema } from './config/config-validation.schema';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UploadsController } from './uploads.controller';
import { PrismaModule } from './prisma/prisma.module';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      load: [configuration],
      validationSchema: configValidationSchema,
      validationOptions: {
        convert: true,
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'www-admin'),
        serveRoot: '/admin',
      },
      {
        rootPath: join(__dirname, '..', 'www-client'),
        exclude: ['/api/(.*)', '/uploads/(.*)', '/admin/(.*)'],
      },
    ),
    PrismaModule,
    AuthModule,
    PageModule,
  ],
  controllers: [UploadsController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
