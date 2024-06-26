'use client'
import { getInfoGitHub } from '@/services/githubService'
import '@/styles/components/gitBlock.scss'
import { Repository } from '@/types/github'
import { CaretDownOutlined, LoadingOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

const GitBlock = () => {
	const [repos, setRepos] = useState<Repository[]>([])
	const [loading, setloading] = useState<boolean>(false)
	useEffect(() => {
		getInfoGitHub()
			.then(data => setRepos(data))
			.finally(() => setloading(true))
	}, [])
	return (
		<div className='GitBlock'>
			<h1>Проекты на GitHub</h1>
			{loading ? (
				<div className='GitBlock__blocks'>
					{repos?.reverse().map(repo => (
						<div key={repo.id} className='GitBlock__blocks--item'>
							<h3>{repo.name}</h3>
							<p style={{ marginBottom: '20px' }}>
								{repo.description || 'Нет описания'}
							</p>

							<p style={{ marginBottom: '5px' }}>
								{repo.languages && repo.languages.length > 0
									? 'Используемые языки:'
									: 'Нет данных о языках'}
							</p>
							<div className='GitBlock__blocks--item--language'>
								{repo.languages?.map((item, index) => (
									<p key={index}>{item}</p>
								)) || 'No languages data'}
							</div>
							<a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
								Смотреть на GitHub
							</a>
							{repo.homepage && (
								<>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={repo.homepage}
										className='GitBlock__blocks--item--demo'
									>
										<button>Демо</button>
									</a>
									<div className='GitBlock__blocks--item--arrow'>
										<CaretDownOutlined style={{ fontSize: '24px' }} />
									</div>
								</>
							)}
						</div>
					))}
				</div>
			) : (
				<div className='GitBlock__loading'>
					<LoadingOutlined style={{ fontSize: '50px' }} />
				</div>
			)}
		</div>
	)
}
export default GitBlock
