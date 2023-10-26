using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class pushModelsToDataBase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Balance = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "userAssets",
                columns: table => new
                {
                    UserAssetId = table.Column<int>(type: "int", nullable: false),
                    CoinCode = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userAssets", x => new { x.UserId, x.CoinCode });
                    table.ForeignKey(
                        name: "FK_userAssets_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "coinPurchaseRequests",
                columns: table => new
                {
                    CoinPurchaseRequestId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    CoinCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    CurrentPrice = table.Column<double>(type: "float", nullable: false),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserAssetCoinCode = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    UserAssetUserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_coinPurchaseRequests", x => x.CoinPurchaseRequestId);
                    table.ForeignKey(
                        name: "FK_coinPurchaseRequests_userAssets_UserAssetUserId_UserAssetCoinCode",
                        columns: x => new { x.UserAssetUserId, x.UserAssetCoinCode },
                        principalTable: "userAssets",
                        principalColumns: new[] { "UserId", "CoinCode" });
                });

            migrationBuilder.CreateIndex(
                name: "IX_coinPurchaseRequests_UserAssetUserId_UserAssetCoinCode",
                table: "coinPurchaseRequests",
                columns: new[] { "UserAssetUserId", "UserAssetCoinCode" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "coinPurchaseRequests");

            migrationBuilder.DropTable(
                name: "userAssets");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
