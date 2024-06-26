'use client'
import useThemeStore from '@/store/userStore'
import { StarOutlined, SunOutlined } from '@ant-design/icons'
import { ConfigProvider, Switch } from 'antd'

import { useEffect } from 'react'
const ThemeSwitch = () => {
	const { darkMode, toggleTheme } = useThemeStore()
	useEffect(() => {
		const mains = document.querySelectorAll('main')
		mains.forEach(main => {
			main.className = darkMode ? 'dark' : ''
		})
	}, [darkMode])
	return (
		<div className='ThemePicker' style={{ width: 'fit-content' }}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#6a0dad',
					},
				}}
			>
				<Switch
					// size='small'
					onChange={toggleTheme}
					checkedChildren={<SunOutlined />}
					unCheckedChildren={<StarOutlined />}
					defaultChecked
				/>
			</ConfigProvider>
		</div>
	)
}
export default ThemeSwitch
