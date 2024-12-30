import type { Registry } from "simple-shadcn-cli/types";

export const hooks: Registry = [
	{
		name: "use-local-storage",
		type: "registry:hook",
		description: "A hook to use local storage",
		files: [{ type: "registry:hook", path: "hooks/use-local-storage.ts" }],
	},
];
