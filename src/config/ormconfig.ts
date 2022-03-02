/* eslint-disable prettier/prettier */
import { ConnectionOptions } from "typeorm"


const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // autoLoadEntities: true,
  synchronize: false,
  //migrationsRun: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
}

export default config;
