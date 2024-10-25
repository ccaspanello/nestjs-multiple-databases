import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'schema-a', name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}
