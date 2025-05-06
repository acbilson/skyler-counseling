FROM mcr.microsoft.com/dotnet/sdk:latest AS build
WORKDIR /App

# Copy api source
COPY ./api .
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet publish -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:latest
WORKDIR /App
COPY --from=build /App/out .
ENTRYPOINT ["dotnet", "SkylerCounseling.API.dll"]
