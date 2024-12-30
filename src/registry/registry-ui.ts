import type { Registry } from "simple-shadcn-cli/types";

export const ui: Registry = [
	{
		name: "loading-button",
		type: "registry:ui",
		description: "A button component with loading state using shadcn's Button.",
		dependencies: ["lucide-react"],
		registryDependencies: ["button"],
		files: [{ type: "registry:ui", path: "ui/loading-button.tsx" }],
	},
	{
		name: "animated-badge",
		type: "registry:ui",
		description: "A badge component with hover animation using Framer Motion.",
		dependencies: ["framer-motion"],
		registryDependencies: ["badge"],
		files: [{ type: "registry:ui", path: "ui/animated-badge.tsx" }],
	},
	{
		name: "confetti-button",
		type: "registry:ui",
		description: "A button that shoots confetti when clicked.",
		dependencies: ["canvas-confetti", "@types/canvas-confetti"],
		registryDependencies: ["button"],
		files: [{ type: "registry:ui", path: "ui/confetti-button.tsx" }],
	},
];
