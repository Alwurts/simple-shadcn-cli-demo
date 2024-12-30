# simple-shadcn-cli-demo

This is a demo repository showcasing how to use [simple-shadcn-cli](https://github.com/Alwurts/simple-shadcn-cli) to build a shadcn component library. It serves as a template and reference implementation for creating your own shadcn component libraries.

## Project Structure

The repository follows a clean and organized structure in the `src/registry` folder:

```
src/registry/
├── index.ts          # Main entry point combining all registry items
├── registry-ui.ts    # UI components registry definitions
├── registry-hook.ts  # Hooks registry definitions
├── ui/              # UI component implementations
└── hooks/           # Hook implementations
```

### Registry Configuration

Components are defined using TypeScript with proper typing from `simple-shadcn-cli/types`. Each component in the registry specifies:

- `name`: Unique identifier for the component
- `type`: Registry type (e.g., "registry:ui" or "registry:hook")
- `description`: Clear description of the component's purpose
- `dependencies`: Required npm packages
- `devDependencies`: Required dev npm packages
- `registryDependencies`: Required shadcn components
- `files`: Source file locations

Example registry configuration:

```typescript
export const ui: Registry = [
  {
    name: "loading-button",
    type: "registry:ui",
    description: "A button component with loading state using shadcn's Button.",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [{ type: "registry:ui", path: "ui/loading-button.tsx" }],
  },
  // ... more components
];
```

### Example Components

The demo includes several example components:

- `loading-button`: A button with loading state
- `animated-badge`: A badge with Framer Motion animations
- `confetti-button`: A button that triggers confetti effects

## Using This Template

1. Clone this repository as a starting point
2. Follow the same structure for your components:
   - Define components in the `ui/` or `hooks/` folders
   - Register them in `registry-ui.ts` or `registry-hook.ts`
   - Combine registries in `index.ts`
3. Use the build command to generate distributable registry files:

   ```bash
   npm run build:registry
   ```

4. Publish your website an access the registry at `https://<your-website-name>/registry/<component-name>.json`

## Build Process

The repository uses `simple-shadcn-cli build` to:

- Process all component files
- Generate JSON files in the `public/registry` directory
- Create distributable versions of your components

For more information about the CLI tool and its features, visit the [simple-shadcn-cli repository](https://github.com/Alwurts/simple-shadcn-cli).
