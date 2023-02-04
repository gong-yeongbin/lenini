import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './Base';
import { Product } from './Product';

@Entity({ database: 'lenini', name: 'consumer' })
export class Consumer extends Base {
  @Column({ name: 'order_date', type: 'timestamp', nullable: false })
  order_date: Date;

  @Column({ name: 'delivery_date', type: 'timestamp', nullable: true })
  delivery_date: Date;

  @Column({ name: 'delivery_price', type: 'int', nullable: true })
  delivery_price: number;

  @OneToMany(() => Product, (product) => product.consumer)
  products: Product[];
}
