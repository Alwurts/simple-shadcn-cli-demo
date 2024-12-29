"use client";

import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedBadgeProps extends BadgeProps {
	animate?: boolean;
	delay?: number;
}

export function AnimatedBadge({
	children,
	className,
	animate = true,
	delay = 0,
	...props
}: AnimatedBadgeProps) {
	return (
		<motion.div
			initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
			animate={animate ? { opacity: 1, scale: 1 } : undefined}
			transition={{
				duration: 0.3,
				delay,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<Badge className={cn(className)} {...props}>
				{children}
			</Badge>
		</motion.div>
	);
}

AnimatedBadge.displayName = "AnimatedBadge";
