import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLetters1619741041547 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "letters",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "author_id",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "content",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUsers",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["author_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("letters");
  }
}
