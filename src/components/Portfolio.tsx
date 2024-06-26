import Avatar from '@/image/icons/134856869.jpg'
import InstA from '@/image/icons/insta.svg'
import room from '@/image/icons/room.svg'
import VK from '@/image/icons/vk.svg'
import '@/styles/components/Portfolio.scss'
import Image from 'next/image'
import Link from 'next/link'
const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<div className='Portfolio__head'>
				<Image src={room} alt='room' />
			</div>
			<div className='Portfolio__text'>
				<div className='Portfolio__text--img'>
					<Image src={Avatar} alt='Avatar' />
				</div>
				<div className='Portfolio__text--name'>
					<h1>AndreyPetrozhitskiy</h1>
					<span>блог front-end разработчика</span>
					<div className='Portfolio__text--name--social'>
						<a
							href='https://www.instagram.com/dev.atiy?igsh=djkwcnJlbzhrcmR2'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image src={InstA} alt='InstA' />{' '}
						</a>
						<a
							href='https://vk.com/id865248334'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image src={VK} alt='VK' />{' '}
						</a>
					</div>
				</div>
				<div className='Portfolio__text--description'>
					<p>
						Меня зовут Андрей, мне 19 лет. Специализируюсь на разработке
						пользовательских интерфейсов с использованием React, NextJS,SCSS.
						Был опыт в бэкенд разработке, с использованием ExpressJS и
						PostgreSQL. Проекты выкладываю на GitHub.
					</p>
				</div>
				<div className='Portfolio__text--links'>
					<Link href='/projects' style={{ backgroundColor: '#ED3024' }}>
						Мои работы
					</Link>
					<Link
						href='https://www.instagram.com/dev.atiy?igsh=djkwcnJlbzhrcmR2'
						style={{ backgroundColor: '#3137C9' }}
					>
						Написать мне
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Portfolio
