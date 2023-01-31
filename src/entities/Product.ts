import { Column, Entity } from 'typeorm';
import { Base } from './Base';

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
}
