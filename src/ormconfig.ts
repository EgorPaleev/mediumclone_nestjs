import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from 'path';

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'user',
    database: 'mediumclone',
    entities: [
        path.join(__dirname, '/**/*.entity{.ts,.js}')
],
    synchronize: false, 
    migrations: [path.join(__dirname, '/migrations/**/*{.ts,.js}')],
    cli: {
        migrationsDir: 'src/migrations',
      },
    logging: true,
};

export default config;