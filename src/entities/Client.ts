import { Entity, OneToMany } from 'typeorm';
import { Base } from './Base';
import { Product } from './Product';

@Entity({ database: 'lenini', name: 'client' })
export class Client extends Base {
  @OneToMany(() => Product, (product) => product.client)
  products: Product[];
}
