import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterProduct1675514157265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`alter table product add client varchar(50)`);
    await queryRunner.query(`alter table product add consumer varchar(50)`);
    await queryRunner.query(
      `alter table product add foreign key(client) references client(name)`
    );
    await queryRunner.query(
      `alter table product add foreign key(consumer) references consumer(name)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
