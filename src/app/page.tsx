'use client'

import BlockBlog from '@/components/blockBlog'
import GitSlider from '@/components/gitSlider'
import '@/styles/components/Home.scss'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='Home'>
			<div className='Home__projects'>
				<Link href='/projects'>Проекты</Link>
				<GitSlider />
				<BlockBlog count={10} />
			</div>
		</div>
	)
}
