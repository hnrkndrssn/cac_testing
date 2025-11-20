# cac_testing

A .NET web application with three projects demonstrating a modern web application architecture.

## Project Structure

This solution contains three projects:

### 1. **Shared** (Class Library)
A shared library containing common models and types used by both the API and Web projects.

**Models:**
- `UserInfo` - User information model
- `AuthRequest` - Login request model
- `AuthResponse` - Authentication response with JWT token

### 2. **Api** (ASP.NET Core Web API)
A RESTful API with JWT authentication for secure endpoints.

**Features:**
- JWT Bearer token authentication
- Login endpoint (`/api/auth/login`) - Generates JWT tokens
- Protected endpoints (e.g., `/weatherforecast`) - Requires valid JWT token
- OpenAPI/Swagger support (in development mode)

**Configuration:**
JWT settings are configured in `appsettings.json`:
```json
{
  "Jwt": {
    "Key": "secret-key",
    "Issuer": "CacTestingApi",
    "Audience": "CacTestingClient",
    "ExpirationMinutes": 60
  }
}
```

### 3. **Web** (ASP.NET Core MVC + React)
A web application using ASP.NET Core MVC with a React TypeScript frontend.

**Features:**
- ASP.NET Core backend
- React with TypeScript frontend
- SPA (Single Page Application) architecture
- Development proxy to React dev server

## Getting Started

### Prerequisites
- .NET 10.0 SDK
- Node.js 20+ and npm (for the React frontend)

### Building the Solution

```bash
# Build all projects
dotnet build

# Restore npm packages for React app
cd src/Web/clientapp
npm install
cd ../../..
```

### Running the Applications

#### API Project
```bash
cd src/Api
dotnet run
```

The API will be available at `http://localhost:5156` (or the configured port).

**Test the API:**
```bash
# Get a JWT token
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test"}'

# Use the token to access protected endpoints
curl -X GET http://localhost:5000/weatherforecast \
  -H "Authorization: Bearer {your-token-here}"
```

#### Web Project
```bash
cd src/Web
dotnet run
```

In development mode, you can also run the React dev server separately:
```bash
cd src/Web/clientapp
npm start
```

The React app will be available at `http://localhost:3000`.

## Architecture

```
┌─────────────────┐
│   Web (MVC)     │
│   + React SPA   │
└────────┬────────┘
         │
         │ References
         ▼
┌─────────────────┐
│     Shared      │◄──────┐
│  (Class Lib)    │       │
└─────────────────┘       │ References
                          │
                   ┌──────┴──────┐
                   │   Api       │
                   │   (Web API) │
                   │   + JWT     │
                   └─────────────┘
```

## License

See LICENSE file for details.<!-- Comment 19 -->
<!-- Comment 20 -->

<!-- Random note 27: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 31: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 40: Updated on Thu Nov 20 01:58:48 UTC 2025 -->
<!-- Comment 41 -->
<!-- Comment 48 -->

<!-- Random note 51: Updated on Thu Nov 20 01:58:48 UTC 2025 -->
<!-- Comment 53 -->


<!-- Random note 60: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 64: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 65: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 83: Updated on Thu Nov 20 01:58:48 UTC 2025 -->
<!-- Comment 85 -->

<!-- Random note 87: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 92: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 96: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 99: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 103: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 107: Updated on Thu Nov 20 01:58:48 UTC 2025 -->

<!-- Random note 113: Updated on Thu Nov 20 01:58:49 UTC 2025 -->
<!-- Comment 120 -->

<!-- Random note 124: Updated on Thu Nov 20 01:58:49 UTC 2025 -->

<!-- Random note 129: Updated on Thu Nov 20 01:58:49 UTC 2025 -->
<!-- Comment 134 -->

<!-- Random note 137: Updated on Thu Nov 20 01:58:49 UTC 2025 -->

<!-- Random note 138: Updated on Thu Nov 20 01:58:49 UTC 2025 -->
<!-- Comment 139 -->

<!-- Random note 140: Updated on Thu Nov 20 01:58:49 UTC 2025 -->
<!-- Comment 141 -->
<!-- Comment 142 -->
<!-- Comment 144 -->
<!-- Comment 154 -->

<!-- Random note 156: Updated on Thu Nov 20 01:58:49 UTC 2025 -->

<!-- Random note 160: Updated on Thu Nov 20 01:58:49 UTC 2025 -->

<!-- Random note 161: Updated on Thu Nov 20 01:58:49 UTC 2025 -->
<!-- Comment 163 -->


<!-- Random note 169: Updated on Thu Nov 20 01:58:49 UTC 2025 -->
