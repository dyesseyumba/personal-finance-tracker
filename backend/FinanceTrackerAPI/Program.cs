using FinanceTrackerAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var app = builder.Build();

var configuration = builder.Configuration;
string databaseProvider = configuration["DatabaseProvider"] ?? "SQLite";

// Configure the database context based on the provider
if (databaseProvider == "SQLite")
{
    services.AddDbContext<AppDbContext>(options =>
        options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));
}
// else if (databaseProvider == "SqlServer")
// {
//     services.AddDbContext<AppDbContext>(options =>
//         options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
// }

services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/", () => "Hello World!");

app.Run();
