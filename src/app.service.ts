import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger = new Logger(AppService.name);

  /**
   * I eventually want to be able to inject the following into other services:
   * @InjectRepository(UserEntity, 'DsSchemaA') userRepo: Repository<UserEntity>,
   * @InjectRepository(CompanyEntity, 'DsSchemaB') companyRepo: Repository<CompanyEntity>,
   * @InjectDataSource('DsSchemaA') dataSource: DataSource,
   *
   * According to my readings I'll need to use the dataSource directly to query across databases
   * (using the one that has access to both databases)
   */
  constructor() {}

  run() {
    this.logger.log('AppService.run()');
  }
}
