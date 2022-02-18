import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePokemon1645060279040 implements MigrationInterface {
  private readonly tableName = 'pokemon';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'number',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'current_timestamp',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'current_timestamp',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
