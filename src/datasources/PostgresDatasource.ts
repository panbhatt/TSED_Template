import {registerProvider} from "@tsed/di";
import {Logger} from "@tsed/logger";
import {DataSource} from "typeorm";

export const PostgresDatasource = Symbol.for("PostgresDatasource");
export type PostgresDatasource = DataSource;
export const postgresDatasource = new DataSource({
  type: "postgres",
  entities: [],
  host: "localhost",
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_HOST
});


registerProvider<DataSource>({
  provide: PostgresDatasource,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await postgresDatasource.initialize();

    logger.info("Connected with typeorm to database: Postgres");

    return postgresDatasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
    
  }
});
