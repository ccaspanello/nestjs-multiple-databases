import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './schema-a/user.entity';
import { CompanyEntity } from './schema-b/company.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

const schemaAEntities = [UserEntity];
const schemaBEntities = [CompanyEntity];

@Module({
  imports: [
    // Define Connection for Schema A
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const username = configService.get<string>('DB_USER');
        const password = configService.get<string>('DB_PASS');
        console.log(
          `Connection for Schema A (${host}:${port} ${username}/ ${password}`,
        );
        return {
          logger: 'debug',
          name: 'DsSchemaA',
          type: 'mysql',
          host: host,
          port: port,
          username: username,
          password: password,
          database: 'schema-a',
          logging: ['query', 'error'],
          entities: schemaAEntities,
          primaryGeneratedColumn: 'rowid',
          timezone: 'Z',
          synchronize: true,
        };
      },
    }),

    // Define Connection for Schema B
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const username = configService.get<string>('DB_USER');
        const password = configService.get<string>('DB_PASS');
        console.log(
          `Connection for Schema A (${host}:${port} ${username}/ ${password}`,
        );
        return {
          logger: 'debug',
          name: 'DsSchemaB',
          type: 'mysql',
          host: host,
          port: port,
          username: username,
          password: password,
          database: 'schema-b',
          logging: ['query', 'error'],
          entities: schemaBEntities,
          primaryGeneratedColumn: 'rowid',
          timezone: 'Z',
          synchronize: true,
        };
      },
    }),

    // Creates Repository for Schema A
    TypeOrmModule.forFeature(schemaAEntities, 'DsSchemaA'),

    // Create Repository for Schema B
    TypeOrmModule.forFeature(schemaBEntities, 'DsSchemaB'),
  ],
  providers: [AppService],
})
export class AppModule {}
