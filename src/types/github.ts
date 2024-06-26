export interface Repository {
	id: number
	name: string
	full_name: string
	description: string | null
	html_url: string
	homepage: string | null
	languages_url: string
	languages?: string[]
}
