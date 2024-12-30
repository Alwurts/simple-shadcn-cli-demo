import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism.css";

interface ComponentCardProps {
	title: string;
	description: string;
	type: "component" | "hook";
	preview?: React.ReactNode;
	code: string;
}

export function ComponentCard({
	title,
	description,
	type,
	preview,
	code,
}: ComponentCardProps) {
	const [activeTab, setActiveTab] = useState<string>("");
	const hasPreview = type === "component" && preview;
	const defaultTab = hasPreview ? "preview" : "code";

	useEffect(() => {
		setActiveTab(defaultTab);
	}, [defaultTab]);

	useEffect(() => {
		if (activeTab === "code") {
			Prism.highlightAll();
		}
	}, [activeTab]);

	return (
		<div className="group py-6 sm:py-8 first:pt-0">
			<div className="mb-4 sm:mb-6">
				<h3 className="text-lg sm:text-xl font-medium">{title}</h3>
				<p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-1.5">
					{description}
				</p>
			</div>
			<Tabs
				defaultValue={defaultTab}
				className="w-full"
				onValueChange={setActiveTab}
			>
				<TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
					{hasPreview && (
						<TabsTrigger
							value="preview"
							className={cn(
								"rounded-none border-b-2 border-b-transparent text-sm",
								"data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
							)}
						>
							Preview
						</TabsTrigger>
					)}
					<TabsTrigger
						value="code"
						className={cn(
							"rounded-none border-b-2 border-b-transparent text-sm",
							"data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
						)}
					>
						Code
					</TabsTrigger>
				</TabsList>
				{hasPreview && (
					<TabsContent value="preview" className="pt-4 sm:pt-6">
						<div className="flex min-h-[100px] items-center justify-center rounded-md border border-dashed p-4 sm:p-8 bg-muted/40">
							{preview}
						</div>
					</TabsContent>
				)}
				<TabsContent value="code" className="pt-4 sm:pt-6">
					<pre className="rounded-lg bg-muted p-3 sm:p-4 overflow-x-auto max-w-[calc(100vw-2rem)] sm:max-w-none">
						<code className="language-tsx text-xs sm:text-sm whitespace-pre-wrap break-all sm:break-normal sm:whitespace-pre">
							{code}
						</code>
					</pre>
				</TabsContent>
			</Tabs>
		</div>
	);
}
