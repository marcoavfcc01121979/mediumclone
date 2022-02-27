/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*.{.ts,.js}'],
  cli: {
      migrationsDir: 'src/migrations',
  },
} as TypeOrmModuleOptions;
