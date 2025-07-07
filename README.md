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

---

# AngularWorkspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/LMfJ67oZp5)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve angular-workspace
```

To create a production bundle:

```sh
npx nx build angular-workspace
```

To see all available targets to run for a project, run:

```sh
npx nx show project angular-workspace
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
