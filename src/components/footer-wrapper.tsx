'use client';

import { useEffect, useState } from 'react';
import { Footer } from './footer';

export function FooterWrapper() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShow(true), 100);
		return () => clearTimeout(timer);
	}, []);

	if (!show) return null;
	return <Footer />;
}
