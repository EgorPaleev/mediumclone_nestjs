import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedDb1686864466187 implements MigrationInterface {
    name = 'SeedDb1686864466187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`);


    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}