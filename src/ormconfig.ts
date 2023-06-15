import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {TagEntity} from "./tag/tag.entity";

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mediumclone',
    password: 'user',
    database: 'mediumclone2',
    entities: [TagEntity],
    synchronize: true,
    logging: true,
};

export default config;
