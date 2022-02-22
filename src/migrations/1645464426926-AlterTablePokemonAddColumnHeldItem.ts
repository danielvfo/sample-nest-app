import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTablePokemonAddColumnHeldItem1645464426926
  implements MigrationInterface
{
  private readonly tableName = 'pokemon';
  private readonly columnName = 'held_item_id';
  private readonly fkName = 'FK_HELD_ITEM';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: this.columnName,
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        name: this.fkName,
        columnNames: [this.columnName],
        referencedTableName: 'held_item',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.fkName);
    await queryRunner.dropColumn(this.tableName, this.columnName);
  }
}
