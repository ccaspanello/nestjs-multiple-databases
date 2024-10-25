import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'schema-b', name: 'company' })
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ type: 'int', name: 'user_id' })
  userId: number;
}
