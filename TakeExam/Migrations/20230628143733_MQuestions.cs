using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TakeExam.Migrations
{
    /// <inheritdoc />
    public partial class MQuestions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Head = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Body = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    a = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    b = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    c = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    d = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CorrectAns = table.Column<string>(type: "nvarchar(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Questions");
        }
    }
}
