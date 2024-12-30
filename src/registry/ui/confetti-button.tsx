import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { forwardRef } from "react";

export interface ConfettiButtonProps extends ButtonProps {
	confettiConfig?: confetti.Options;
}

export const ConfettiButton = forwardRef<
	HTMLButtonElement,
	ConfettiButtonProps
>(({ onClick, confettiConfig, ...props }, ref) => {
	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		const x = (rect.left + rect.width / 2) / window.innerWidth;
		const y = (rect.top + rect.height / 2) / window.innerHeight;

		confetti({
			particleCount: 100,
			spread: 70,
			origin: { x, y },
			...confettiConfig,
		});

		onClick?.(e);
	};

	return <Button ref={ref} onClick={handleClick} {...props} />;
});
