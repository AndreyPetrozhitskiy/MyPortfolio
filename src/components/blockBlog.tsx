'use client'
import { getPosts } from '@/services/blogService'
import '@/styles/components/BlockBlog.scss'
import { Post } from '@/types/blog'
import { LoadingOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
interface Props {
	count: number
}
const BlockBlog = ({ count }: Props) => {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setloading] = useState<boolean>(false)
	useEffect(() => {
		getPosts(count)
			.then(data => setPosts(data.reverse()))
			.finally(() => setloading(true))
	}, [])
	return (
		<div className='BlockBlog'>
			<Link href='/blog' style={{ fontSize: '28px' }}>
				Блог
			</Link>
			{loading ? (
				<div className='BlockBlog__posts'>
					{posts.map((post, index) => (
						<div className='BlockBlog__posts--item'>
							<h1>{post.title}</h1>
							<span>{post.body}</span>
						</div>
					))}
				</div>
			) : (
				<div className='BlockBlog__loading'>
					<LoadingOutlined style={{ fontSize: '50px' }} />
				</div>
			)}
		</div>
	)
}
export default BlockBlog
