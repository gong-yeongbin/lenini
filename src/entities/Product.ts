import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from './Base';
import { Client } from './Client';
import { Consumer } from './Consumer';

@Entity({ database: 'lenini', name: 'product' })
export class Product extends Base {
  @Column({ name: 'receiving_date', type: 'timestamp' })
  receiving_date: Date;

  @Column({ name: 'wholesale_price', type: 'int' })
  wholesale_price: number;

  @Column({ name: 'consumer_price', type: 'int' })
  consumer_price: number;

  @Column({ name: 'upload_date', type: 'timestamp' })
  upload_date: Date;

  @ManyToOne(() => Client, (client) => client.products)
  client: Client;

  @ManyToOne(() => Consumer, (consumer) => consumer.products)
  consumer: Consumer;
}
