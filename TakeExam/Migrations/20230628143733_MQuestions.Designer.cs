﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TakeExam.Models;

#nullable disable

namespace TakeExam.Migrations
{
    [DbContext(typeof(TakeExamContext))]
    [Migration("20230628143733_MQuestions")]
    partial class MQuestions
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TakeExam.Models.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Body")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CorrectAns")
                        .IsRequired()
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("Head")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("a")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("b")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("c")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("d")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
