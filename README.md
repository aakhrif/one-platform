# Nx Angular Workspace: Feature-Sliced Architecture, DDD & DI

This repository demonstrates a modern Angular monorepo using [Nx](https://nx.dev) by Nrwl, applying **Domain-Driven Design (DDD)** and **feature-sliced architecture**. It showcases:

- **Feature-sliced project structure** for scalable frontend development
- **Domain-Driven Design (DDD)** principles for clear separation of concerns
- **Dependency Injection (DI)** via Angular's container pattern
- **Project and dependency management** using Nx
- **Mock-based authentication** (no database)

## Key Features

- **Feature folders**: Auth, Dashboard, Shared, etc.
- **Mock authentication**: User data in `one-platform/src/assets/users.json`, no backend required
- **Login flow**: Standalone login component, AuthService, and route guard
- **Protected dashboard**: Only accessible after login
- **Reusable route animations**: Centralized in `features/shared/animations/route-animations.ts`
- **Modern Angular provider API**: `provideHttpClient`, `provideRouter`, etc.

---

## Project Structure Example

```
apps/one-platform/
  src/app/
    features/
      auth/
      dashboard/
      shared/
```

## Dependency Injection & Container Pattern

Angular's DI system is used throughout, with services provided via `providedIn: 'root'` or the modern provider API. This enables singleton/factory patterns similar to containers in Symfony/Laravel.

---

## Managing Projects with Nx

- Run the dev server:
  ```sh
  npx nx serve one-platform
  ```
- Build for production:
  ```sh
  npx nx build one-platform
  ```
- Run tests:
  ```sh
  npx nx test one-platform
  ```
- Visualize project graph:
  ```sh
  npx nx graph
  ```

---

## Testing the Login Flow

1. Start the dev server:
   ```sh
   npx nx serve one-platform
   ```
2. Open [http://localhost:4200](http://localhost:4200) in your browser.
3. Use one of the demo users from `one-platform/src/assets/users.json` to log in.

### Example users.json
```json
[
  { "username": "demo", "password": "demo123" },
  { "username": "admin", "password": "admin123" }
]
```

### Test users endpoint with curl

You can fetch the mock users directly:
```sh
curl http://localhost:4200/assets/users.json
```

---

## More

- This workspace is managed by Nx for consistent project configuration, code generation, and dependency management.
- For more info, see the [Nx documentation](https://nx.dev) or run `npx nx --help`.
