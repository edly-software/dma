import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { MoveHorizontal } from "lucide-react";

interface CompareProps {
	firstImage?: string;
	secondImage?: string;
	className?: string;
	firstImageClassName?: string;
	secondImageClassname?: string;
	initialSliderPercentage?: number;
	slideMode?: "hover" | "drag";
	showHandlebar?: boolean;
	autoplay?: boolean;
	autoplayDuration?: number;
}

export const Compare = ({
	firstImage = "",
	secondImage = "",
	className,
	firstImageClassName,
	secondImageClassname,
	initialSliderPercentage = 50,
	slideMode = "drag",
	showHandlebar = true,
	autoplay = false,
	autoplayDuration = 5000,
}: CompareProps) => {
	const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
	const [isDragging, setIsDragging] = useState(false);
	const sliderRef = useRef<HTMLDivElement>(null);
	const autoplayRef = useRef<NodeJS.Timeout | null>(null);

	const startAutoplay = useCallback(() => {
		if (!autoplay) return;
		const startTime = Date.now();
		const animate = () => {
			const elapsedTime = Date.now() - startTime;
			const progress =
				(elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
			const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
			setSliderXPercent(percentage);
			autoplayRef.current = setTimeout(animate, 16);
		};
		animate();
	}, [autoplay, autoplayDuration]);

	const stopAutoplay = useCallback(() => {
		if (autoplayRef.current) {
			clearTimeout(autoplayRef.current);
			autoplayRef.current = null;
		}
	}, []);

	useEffect(() => {
		startAutoplay();
		return () => stopAutoplay();
	}, [startAutoplay, stopAutoplay]);

	const updatePosition = useCallback((clientX: number) => {
		if (!sliderRef.current) return;
		const rect = sliderRef.current.getBoundingClientRect();
		const x = clientX - rect.left;
		const percent = (x / rect.width) * 100;
		requestAnimationFrame(() => {
			setSliderXPercent(Math.max(2, Math.min(98, percent)));
		});
	}, []);

	const handleStart = useCallback(
		(clientX: number) => {
			stopAutoplay();
			setIsDragging(true);
			updatePosition(clientX);
		},
		[stopAutoplay, updatePosition],
	);

	const handleEnd = useCallback(() => {
		setIsDragging(false);
	}, []);

	const handleMove = useCallback(
		(clientX: number) => {
			if (slideMode === "hover" || isDragging) {
				updatePosition(clientX);
			}
		},
		[slideMode, isDragging, updatePosition],
	);

	return (
		<div
			ref={sliderRef}
			className={cn(
				"relative h-[400px] w-[400px] select-none overflow-hidden",
				className,
			)}
			style={{
				cursor: isDragging ? "grabbing" : "ew-resize",
			}}
			onMouseMove={(e) => handleMove(e.clientX)}
			onMouseLeave={() => {
				setIsDragging(false);
				startAutoplay();
			}}
			onMouseEnter={() => stopAutoplay()}
			onMouseDown={(e) => handleStart(e.clientX)}
			onMouseUp={handleEnd}
			onTouchStart={(e) => handleStart(e.touches[0].clientX)}
			onTouchEnd={handleEnd}
			onTouchMove={(e) => handleMove(e.touches[0].clientX)}
		>
			{/* Minimal Corner Labels */}
			<div className="pointer-events-none absolute top-3 left-3 z-30 rounded bg-black/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white">
				Vorher
			</div>
			<div className="pointer-events-none absolute top-3 right-3 z-30 rounded bg-white/90 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#0B0B0C]">
				Nachher
			</div>

			{/* Clean 1px Vertical Divider & Minimal Handle */}
			<div
				className="absolute top-0 z-40 h-full w-px bg-white/90"
				style={{
					left: `${sliderXPercent}%`,
				}}
			>
				{showHandlebar && (
					<div className="absolute top-1/2 -left-4 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0B0B0C] shadow-md">
						<MoveHorizontal className="h-3.5 w-3.5" />
					</div>
				)}
			</div>

			{/* First Image (Vorher) */}
			<div className="pointer-events-none relative z-20 h-full w-full overflow-hidden">
				{firstImage ? (
					<div
						className={cn(
							"absolute inset-0 z-20 h-full w-full shrink-0 overflow-hidden select-none",
							firstImageClassName,
						)}
						style={{
							clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
						}}
					>
						<img
							alt="Vorher Zustand"
							src={firstImage}
							className={cn(
								"absolute inset-0 z-20 h-full w-full shrink-0 select-none",
								firstImageClassName,
							)}
							draggable={false}
						/>
					</div>
				) : null}
			</div>

			{/* Second Image (Nachher) */}
			{secondImage ? (
				<img
					className={cn(
						"absolute top-0 left-0 z-[19] h-full w-full select-none",
						secondImageClassname,
					)}
					alt="Nachher Ergebnis"
					src={secondImage}
					draggable={false}
				/>
			) : null}
		</div>
	);
};
