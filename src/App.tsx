import { AnimatedBadge } from "./components/ui/animated-badge";

function App() {
	return (
		<main className="bg-gray-100 min-h-screen flex items-center justify-center">
			<div className="w-[500px] mx-auto flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold">simple-shadcn-cli-demo</h1>
					<p className="text-sm text-muted-foreground">
						The component below is a simple shadcn badge with an enter animation
						using framer motion.
					</p>
				</div>
				<AnimatedBadge delay={0.2}>Hello World!</AnimatedBadge>
			</div>
		</main>
	);
}

export default App;
