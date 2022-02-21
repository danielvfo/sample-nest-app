import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTablePokemonAddColumnRegion1645408681184
  implements MigrationInterface
{
  private readonly tableName = 'pokemon';
  private readonly columnName = 'original_region_id';
  private readonly fkName = 'FK_REGION';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: this.columnName,
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        name: this.fkName,
        columnNames: [this.columnName],
        referencedTableName: 'region',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.fkName);
    await queryRunner.dropColumn(this.tableName, this.columnName);
  }
}
