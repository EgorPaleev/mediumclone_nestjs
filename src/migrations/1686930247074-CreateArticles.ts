import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateArticles1686930247074 implements MigrationInterface {
    name = 'CreateArticles1686930247074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "desciption" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoritesCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password" SET DEFAULT ''`);
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
