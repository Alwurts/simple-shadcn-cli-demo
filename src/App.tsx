import { ComponentCard } from "./components/component-card";
import { LoadingButton } from "./registry/ui/loading-button";
import { AnimatedBadge } from "./registry/ui/animated-badge";
import { ConfettiButton } from "./registry/ui/confetti-button";
import { InstallCommand } from "./components/install-command";

const components = [
	{
		title: "Loading Button",
		description: "A button component with loading state using shadcn's Button.",
		type: "component" as const,
		preview: (
			<LoadingButton
				onClick={async () => {
					await new Promise((resolve) => setTimeout(resolve, 2000));
				}}
			>
				Click me
			</LoadingButton>
		),
		installName: "loading-button",
		code: `import { LoadingButton } from "@/components/ui/loading-button"

export function Example() {
	return (
		<LoadingButton
			onClick={async () => {
				await new Promise((resolve) => setTimeout(resolve, 2000));
			}}
		>
			Click me
		</LoadingButton>
	);
}`,
	},
	{
		title: "Animated Badge",
		description: "A badge component with hover animation using Framer Motion.",
		type: "component" as const,
		preview: <AnimatedBadge>Hover me!</AnimatedBadge>,
		installName: "animated-badge",
		code: `import { AnimatedBadge } from "@/components/ui/animated-badge"

export function Example() {
	return <AnimatedBadge>Hover me!</AnimatedBadge>;
}`,
	},
	{
		title: "Confetti Button",
		description: "A button that shoots confetti when clicked.",
		type: "component" as const,
		preview: <ConfettiButton>Celebrate! 🎉</ConfettiButton>,
		installName: "confetti-button",
		code: `import { ConfettiButton } from "@/components/ui/confetti-button"

export function Example() {
	return <ConfettiButton>Celebrate! 🎉</ConfettiButton>;
}`,
	},
];

const hooks = [
	{
		title: "useLocalStorage",
		description: "A hook for managing state in localStorage with type safety.",
		type: "hook" as const,
		installName: "use-local-storage",
		code: `import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error("Error reading from localStorage:", error);
			return initialValue;
		}
	});

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error("Error writing to localStorage:", error);
		}
	};

	return [storedValue, setValue] as const;
}`,
	},
];

function App() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto py-8 px-4 sm:py-16 sm:px-6">
				<div className="flex flex-col gap-8 sm:gap-16">
					<div className="space-y-2">
						<h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
							simple-shadcn-cli-demo
						</h1>
						<p className="text-base sm:text-lg text-muted-foreground">
							A example documentation site with a custom shadcn CLI registry
							built with simple-shadcn-cli.
						</p>
						<div className="flex flex-col gap-2">
							<span className="text-muted-foreground">
								<a
									href="https://github.com/Alwurts/simple-shadcn-cli-demo"
									className="text-foreground underline"
								>
									simple-shadcn-cli-demo
								</a>{" "}
								repository
							</span>
							<span className="text-muted-foreground">
								<a
									href="https://github.com/Alwurts/simple-shadcn-cli"
									className="text-foreground underline"
								>
									simple-shadcn-cli
								</a>{" "}
								repository
							</span>
						</div>
					</div>

					<div className="grid gap-4 sm:gap-8">
						<section>
							<div className="mb-2">
								<h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-3">
									Components
								</h2>
								<p className="text-sm sm:text-base text-muted-foreground">
									A collection of pre-built components ready to use in your
									projects.
								</p>
							</div>
							<div className="divide-y">
								{components.map((component) => (
									<div key={component.title} className="py-6">
										<ComponentCard {...component} />
										<InstallCommand
											url="https://simple-shadcn-cli-demo.vercel.app/registry"
											componentName={component.installName}
										/>
									</div>
								))}
							</div>
						</section>

						<section>
							<div className="mb-2">
								<h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-3">
									Hooks
								</h2>
								<p className="text-sm sm:text-base text-muted-foreground">
									Custom React hooks for common functionality.
								</p>
							</div>
							<div className="divide-y">
								{hooks.map((hook) => (
									<div key={hook.title} className="py-6">
										<ComponentCard {...hook} />
										<InstallCommand
											url="https://simple-shadcn-cli-demo.vercel.app/registry"
											componentName={hook.installName}
										/>
									</div>
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
