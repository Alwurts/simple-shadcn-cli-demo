import { AnimatedBadge } from "./components/ui/animated-badge";
import { Separator } from "./components/ui/separator";

function App() {
	return (
		<main className="bg-gray-100 min-h-screen flex items-center justify-center">
			<div className="w-[500px] mx-auto flex flex-col gap-4 p-4">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold">simple-shadcn-cli-demo</h1>
					<p className="text-sm text-muted-foreground">
						The component below is a simple shadcn badge with an enter animation
						using framer motion.
					</p>
				</div>
				<AnimatedBadge delay={0.2}>Hello World!</AnimatedBadge>
				<a
					href="/registry/animated-badge.json"
					rel="noreferrer"
					target="_blank"
					className="text-sm text-muted-foreground hover:underline"
				>
					See the registry output
				</a>
				<Separator />
				<div className="flex flex-col gap-1">
					<h2 className="text-lg font-bold">See simple-shadcn-cli at </h2>
					<a
						href="https://github.com/Alwurts/simple-shadcn-cli"
						rel="noreferrer"
						target="_blank"
						className="text-sm text-muted-foreground hover:underline"
					>
						github.com/Alwurts/simple-shadcn-cli
					</a>
				</div>
			</div>
		</main>
	);
}

export default App;
