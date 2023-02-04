import { MigrationInterface, QueryRunner } from 'typeorm';

export class createConsumer1675506940002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE consumer (
        id int not null auto_increment,
        name varchar(50) not null,
        createdAt datetime not null default current_timestamp,
        updatedAt datetime not null default current_timestamp on update current_timestamp,
        order_date datetime not null,
        delivery_date datetime,
        delivery_price int,
        primary key(id),
        unique key(name)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
