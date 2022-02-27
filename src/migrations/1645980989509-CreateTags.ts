import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTags1645980989509 implements MigrationInterface {
  name = 'CreateTags1645980989509';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character
    varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tags"`);
  }
}
