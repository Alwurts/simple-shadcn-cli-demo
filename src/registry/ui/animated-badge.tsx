"use client";

import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AnimatedBadge({
	children,
	className,
	...props
}: BadgeProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
			transition={{ duration: 0.3 }}
		>
			<Badge className={cn(className)} {...props}>
				{children}
			</Badge>
		</motion.div>
	);
}

AnimatedBadge.displayName = "AnimatedBadge";
