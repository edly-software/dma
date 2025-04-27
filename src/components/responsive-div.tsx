export function ResponsiveDiv({ children, className }: any) {
	return (
		<>
			<div className={className + "flex flex-col gap-5 p-5 md:p-0 "}>
				{children}
			</div>
		</>
	);
}
