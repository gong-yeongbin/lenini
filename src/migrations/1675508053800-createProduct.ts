import { MigrationInterface, QueryRunner } from 'typeorm';

export class createProduct1675508053800 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE product(
        id int not null auto_increment,
        name varchar(50) not null,
        createdAt datetime not null default current_timestamp,
        updatedAt datetime not null default current_timestamp on update current_timestamp,
        receiving_date datetime not null,
        wholesale_price int not null,
        consumer_price int not null,
        upload_date datetime,
        primary key(id)
    )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);
  }
}
