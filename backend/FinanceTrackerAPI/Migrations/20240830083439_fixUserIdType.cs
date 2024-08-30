using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinanceTrackerAPI.Migrations
{
    /// <inheritdoc />
    public partial class fixUserIdType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_User_UserId1",
                table: "Accounts");

            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_User_UserId1",
                table: "Budgets");

            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_User_UserId1",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_UserId1",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Budgets_UserId1",
                table: "Budgets");

            migrationBuilder.DropIndex(
                name: "IX_Accounts_UserId1",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Budgets");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Accounts");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Transactions",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Budgets",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Accounts",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_UserId",
                table: "Transactions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Budgets_UserId",
                table: "Budgets",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_UserId",
                table: "Accounts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_User_UserId",
                table: "Accounts",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_User_UserId",
                table: "Budgets",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_User_UserId",
                table: "Transactions",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Accounts_User_UserId",
                table: "Accounts");

            migrationBuilder.DropForeignKey(
                name: "FK_Budgets_User_UserId",
                table: "Budgets");

            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_User_UserId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_UserId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Budgets_UserId",
                table: "Budgets");

            migrationBuilder.DropIndex(
                name: "IX_Accounts_UserId",
                table: "Accounts");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Transactions",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Transactions",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Budgets",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Budgets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Accounts",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Accounts",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_UserId1",
                table: "Transactions",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Budgets_UserId1",
                table: "Budgets",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_UserId1",
                table: "Accounts",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Accounts_User_UserId1",
                table: "Accounts",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Budgets_User_UserId1",
                table: "Budgets",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_User_UserId1",
                table: "Transactions",
                column: "UserId1",
                principalTable: "User",
                principalColumn: "Id");
        }
    }
}
