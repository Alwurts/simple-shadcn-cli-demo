import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstallCommandProps {
	url: string;
	componentName: string;
	className?: string;
}

export function InstallCommand({
	url,
	componentName,
	className,
}: InstallCommandProps) {
	const [copied, setCopied] = useState(false);

	const packageManagers = {
		pnpm: `pnpm dlx shadcn@latest add ${url}/${componentName}.json`,
		npm: `npx shadcn@latest add ${url}/${componentName}.json`,
		yarn: `npx shadcn@latest add ${url}/${componentName}.json`,
		bun: `bunx --bun shadcn@latest add ${url}/${componentName}.json`,
	};

	const onCopy = async (command: string) => {
		await navigator.clipboard.writeText(command);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className={cn("relative", className)}>
			<Tabs defaultValue="npm" className="relative">
				<TabsList className="justify-start rounded-md bg-muted p-1">
					<TabsTrigger value="npm">npm</TabsTrigger>
					<TabsTrigger value="pnpm">pnpm</TabsTrigger>
					<TabsTrigger value="yarn">yarn</TabsTrigger>
					<TabsTrigger value="bun">bun</TabsTrigger>
				</TabsList>
				{Object.entries(packageManagers).map(([name, command]) => (
					<TabsContent
						key={name}
						value={name}
						className="relative rounded-md bg-muted mt-2 p-4 font-mono text-sm md:w-fit pr-10"
					>
						{command}
						<Button
							size="icon"
							variant="ghost"
							className="absolute right-2 top-3 h-6 w-6"
							onClick={() => onCopy(command)}
						>
							{copied ? (
								<Check className="h-3 w-3" />
							) : (
								<Copy className="h-3 w-3" />
							)}
							<span className="sr-only">Copy</span>
						</Button>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
