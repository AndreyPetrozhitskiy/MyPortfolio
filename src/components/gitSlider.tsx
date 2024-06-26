'use client'
import { getInfoGitHub } from '@/services/githubService'
import '@/styles/components/gitSlider.scss'
import { Repository } from '@/types/github'
import { LoadingOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const GitSlider = () => {
	const [repos, setRepos] = useState<Repository[]>([])
	const [loading, setloading] = useState<boolean>(false)
	useEffect(() => {
		getInfoGitHub()
			.then(data => setRepos(data))
			.finally(() => setloading(true))
	}, [])
	return (
		<div className='GitSlider'>
			{loading ? (
				<div className='GitSlider__slider'>
					<Swiper
						slidesPerView={3}
						spaceBetween={40}
						loop={true}
						autoplay={{
							delay: 5000,
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Autoplay, Pagination]}
						style={{
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							padding: '15px',
						}}
					>
						{repos.splice(-9, 9).map((slide, itemIndex) => (
							<SwiperSlide className='GitSlider__slider--slide'>
								<p className='GitSlider__slider--slide--h1'>{slide.name}</p>
								<p className='GitSlider__slider--slide--desc'>
									{slide.description}
								</p>
								<p className='GitSlider__slider--slide--lang'>
									Используемые языки:
								</p>
								<div className='GitSlider__slider--slide--languages'>
									{slide.languages?.map((item, itemIndex) => (
										<p key={itemIndex}>{item}</p>
									))}
								</div>
								<a
									href={slide.html_url}
									target='_blank'
									rel='noopener noreferrer'
									className='GitSlider__slider--slide--git'
								>
									Страница на GitHub
								</a>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			) : (
				<div className='GitSlider__loading'>
					<LoadingOutlined style={{ fontSize: '50px' }} />
				</div>
			)}
		</div>
	)
}
export default GitSlider
