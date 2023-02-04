import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './Base';
import { Product } from './Product';

@Entity({ database: 'lenini', name: 'client' })
export class Client extends Base {
  @Column({ name: 'location', type: 'text', nullable: true })
  location: string;

  @OneToMany(() => Product, (product) => product.client)
  products: Product[];
}
