import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export default registerAs('database', () => {
  return {
    type: 'postgres',
    logging: true,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadEntities: true,
    //synchronize: process.env.MODE === "dev",
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*{.ts,.js}'],
    //migrations: [join(__dirname, 'migrations', '*{.ts,.js}')],
    cli: {
      migrationsDir: 'src/migrations',
    },
    migrationsTableName: 'database_migrations',
  };
});
