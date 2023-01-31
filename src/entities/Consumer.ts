import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './Base';
import { Product } from './Product';

@Entity({ database: 'lenini', name: 'consumer' })
export class Consumer extends Base {
  @Column({ name: 'order_date', type: 'timestamp' })
  order_date: Date;

  @Column({ name: 'delivery_date', type: 'timestamp' })
  delivery_date: Date;

  @Column({ name: 'delivery_price', type: 'int' })
  delivery_price: number;

  @OneToMany(() => Product, (product) => product.consumer)
  products: Product[];
}
