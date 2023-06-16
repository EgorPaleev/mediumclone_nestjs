import {MigrationInterface, QueryRunner} from "typeorm";

export class Fix1686932178979 implements MigrationInterface {
    name = 'Fix1686932178979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "desciption" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "description" TO "desciption"`);
    }

}
