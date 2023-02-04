import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createClient1675497325126 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE client (
          id int not null auto_increment,
          name varchar(50) not null,
          createdAt datetime not null default current_timestamp,
          updatedAt datetime not null default current_timestamp on update current_timestamp,
          location text,
          primary key(id),
          unique key(name)
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
