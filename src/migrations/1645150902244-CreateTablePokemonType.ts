import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePokemonType1645150902244 implements MigrationInterface {
  private readonly tableName = 'pokemon_type';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'type_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'pokemon_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_TYPE',
            columnNames: ['type_id'],
            referencedTableName: 'type',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_POKEMON',
            columnNames: ['pokemon_id'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
