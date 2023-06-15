import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from 'path';

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mediumclone',
    password: 'user',
    database: 'mediumclone2',
    entities: [path.join(__dirname, '//*.entity{.ts,.js}')],
    synchronize: true, 
    logging: true,
};

export default config;