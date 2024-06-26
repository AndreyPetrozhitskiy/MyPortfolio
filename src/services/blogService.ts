'use server'
import { Post } from '@/types/blog'

export const getPosts = async (count: number) => {
	const postResponse = await fetch(
		`https://jsonplaceholder.typicode.com/posts/`
	)

	const repositories: Post[] = await postResponse.json()

	const response = repositories.reverse().splice(-count, count)
	return response
}
