'use server'
import { Repository } from '@/types/github'
import { env } from 'process'
const token = env.TOKEN

const username = 'AndreyPetrozhitskiy'
const perPage = 100
const page = 1

export const getInfoGitHub = async () => {
	const repoResponse = await fetch(
		`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`,
		{
			headers: {
				Authorization: `token ${token}`,
			},
		}
	)

	if (!repoResponse.ok) {
		console.error('Failed to fetch data: ', repoResponse.statusText)
		return []
	}

	const repositories: Repository[] = await repoResponse.json()

	const promises = repositories.map(async repo => {
		const langResponse = await fetch(repo.languages_url, {
			headers: {
				Authorization: `token ${token}`,
			},
		})

		if (!langResponse.ok) {
			console.error(
				`Failed to fetch languages for ${repo.name}: ${langResponse.statusText}`
			)
			return repo
		}

		const languagesData = await langResponse.json()
		return { ...repo, languages: Object.keys(languagesData) }
	})

	try {
		const enrichedRepositories = await Promise.all(promises)
		return enrichedRepositories
	} catch (error) {
		console.error('Error fetching languages for all repositories:', error)
		return []
	}
}
