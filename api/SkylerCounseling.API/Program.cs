using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Abstractions;
using Microsoft.Identity.Web.Resource;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Tokens;
using SkylerCounseling.API.Data.Entities;
using SkylerCounseling.API.Data;
using SkylerCounseling.API.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// add services
builder.Services.AddScoped<ITextService, TextService>();

builder.Services.AddDbContext<AppDbContext>(options =>
{
	 options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// database is configured in OnConfiguring method of AppDbContext

// Configure Identity
builder.Services.AddIdentity<AppUser, IdentityRole>(options =>
{
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 8;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = true;
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();

// Configure JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
    };
});

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        builder => builder
            .WithOrigins("http://localhost:4200") // Angular app URL
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// TODO: learn how to use AutoMapper
// builder.Services.AddAutoMapper(typeof(Program));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("AllowAngularApp");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// run ef migrations
using (var scope = app.Services.CreateScope())
{
	 var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
	 dbContext.Database.Migrate();

	 // Seed the database with initial data if needed
	 var user = new AppUser {
		 FirstName = "Alex",
		 LastName = "Bilson",
		 Email = "acbilson@gmail.com",
		 NormalizedEmail = "acbilson@gmail.com",
		 UserName = "acbilson",
		 NormalizedUserName = "acbilson",
	 };
	 if (!dbContext.Users.Any(u => u.Email == user.Email))
	 {
		 var password = new PasswordHasher<AppUser>();
		 var hashedPassword = password.HashPassword(user, "password123!");
		 user.PasswordHash = hashedPassword;

		 dbContext.Users.Add(user);
		 dbContext.SaveChanges();
	 }
}

app.Run();
