'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../../public/profile-picture.jpg';
import calculateScrollAlpha from '@/scripts/calculateScrollAlpha';
import Navigation from './navigation';

type HeaderProps = {
	page: string;
};

export default function Header({ page }: HeaderProps) {
	const [color, setColor] = useState(0);

	function handleScroll() {
		setColor(calculateScrollAlpha() * 255);
	}

	useEffect(() => {
		if (page !== 'home') {
			setColor(255);
			return;
		}

		setColor(calculateScrollAlpha() * 255);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 flex items-center w-full max-h-20 p-3 z-50 ${
				color === 255 ? 'bg-black' : ''
			}`}
		>
			<Link href="/">
				<div className="flex items-center">
					<Image
						src={profilePicture}
						alt="Profile picture"
						className={`rounded-full w-14 transition-transform duration-500 ${
							color === 255 ? '' : '-translate-x-20'
						}`}
					/>
					<h1
						className={`pl-3 font-serif text-2xl transition-transform duration-500 ${
							color === 255 ? '' : '-translate-x-14'
						}`}
						style={{ color: `rgb(${color}, ${color}, ${color})` }}
					>
						Joe Owen
					</h1>
				</div>
			</Link>
			<Navigation color={color} />
		</div>
	);
}
