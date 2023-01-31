import { Entity } from 'typeorm';
import { Base } from './Base';

@Entity({ database: 'lenini', name: 'client' })
export class Client extends Base {}
