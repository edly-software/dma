'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function PageLoader() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
			document.documentElement.style.overflow = 'auto';
			document.body.style.overflow = 'auto';
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed inset-0 z-[999] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center"
		>
			<div className="flex flex-col items-center gap-8">
				{/* Logo */}
				<motion.div
					animate={{ scale: [1, 1.05, 1] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<img 
						src="/logo.jpeg" 
						alt="DMA Logo" 
						className="h-24 w-24 rounded-2xl shadow-2xl"
					/>
				</motion.div>

				{/* Loading Text */}
				<div className="flex flex-col items-center gap-4">
					<motion.h2
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="text-2xl font-bold text-white"
					>
						DerMobileAufbereiter
					</motion.h2>

					{/* Animated Dots */}
					<div className="flex gap-2">
						{[0, 1, 2].map((index) => (
							<motion.div
								key={index}
								animate={{ y: [-8, 0, -8] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: index * 0.2,
								}}
								className="h-2 w-2 bg-blue-500 rounded-full"
							/>
						))}
					</div>
				</div>

				{/* Animated Border Circle */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 3, repeat: Infinity, linear: true }}
					className="absolute inset-0 flex items-center justify-center"
				>
					<div className="h-32 w-32 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500/50" />
				</motion.div>
			</div>
		</motion.div>
	);
}
