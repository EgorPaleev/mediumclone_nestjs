import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {TagEntity} from "./tag/tag.entity";

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'data',
    entities: [TagEntity],
    synchronize: true,
    logging: true,
};

export default config;
