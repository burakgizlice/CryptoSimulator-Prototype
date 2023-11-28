using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class pushModelToDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "buyTranscations",
                columns: table => new
                {
                    TranscationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CoinCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    PricePerCoin = table.Column<double>(type: "float", nullable: false),
                    TrascationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CoinImageURL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CoinName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CoinSymbol = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_buyTranscations", x => x.TranscationId);
                });

            migrationBuilder.CreateTable(
                name: "sellTranscations",
                columns: table => new
                {
                    TranscationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CoinCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    PricePerCoin = table.Column<double>(type: "float", nullable: false),
                    TranscationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CoinImageURl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CoinName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CoinSymbol = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_sellTranscations", x => x.TranscationId);
                });

            migrationBuilder.CreateTable(
                name: "userAssets",
                columns: table => new
                {
                    UserAssetId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CoinCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Amount = table.Column<double>(type: "float", nullable: false),
                    CoinImageURL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CoinName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CoinSymbol = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userAssets", x => x.UserAssetId);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Balance = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.UserId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "buyTranscations");

            migrationBuilder.DropTable(
                name: "sellTranscations");

            migrationBuilder.DropTable(
                name: "userAssets");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
