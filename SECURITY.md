# Security Notes

## JWT Secret Key

⚠️ **Important Security Notice**

The JWT secret key in `appsettings.json` is for **development and testing purposes only**.

### For Production:

1. **Never commit production secrets to source control**
2. Use one of these secure methods to store the JWT key:

   - **Environment Variables:**
     ```bash
     export Jwt__Key="your-production-secret-key-here"
     ```

   - **User Secrets** (for development):
     ```bash
     dotnet user-secrets set "Jwt:Key" "your-secret-key"
     ```

   - **Azure Key Vault** (for production):
     Configure your app to read from Azure Key Vault

   - **Docker Secrets** (for containerized deployments)

3. Generate a strong, random key (at least 32 characters) for production

### Generate a Secure Key:

```bash
# Using PowerShell
$key = [Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
echo $key

# Using OpenSSL
openssl rand -base64 64
```

## Other Security Considerations

1. **HTTPS Only**: Ensure HTTPS is enforced in production
2. **CORS**: Configure appropriate CORS policies for the API
3. **Rate Limiting**: Implement rate limiting for authentication endpoints
4. **Password Hashing**: Implement proper password hashing when integrating with a real user database
5. **Token Expiration**: Adjust token expiration based on your security requirements


