'use client'
import '@/styles/components/Header.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import ThemeSwitch from './themeSwitch'
interface Page {
	title: string
	url: string
}
const Header = () => {
	const pages: Page[] = [
		{
			title: 'Главная',
			url: '/',
		},
		{
			title: 'Блог',
			url: '/blog',
		},
		{
			title: 'Проекты',
			url: '/projects',
		},
	]
	const url = usePathname()

	useEffect(() => {
		console.log(url)
	}, [])
	return (
		<div className='Header'>
			<div className='Header__menu'>
				{pages.map((page, itemIndex) => (
					<Link
						key={itemIndex}
						href={page.url}
						className={`Header__menu${url === page.url ? '--active' : ''}`}
					>
						{page.title}
					</Link>
				))}
			</div>
			<ThemeSwitch />
		</div>
	)
}
export default Header
