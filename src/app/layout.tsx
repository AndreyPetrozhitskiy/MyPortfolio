import Portfolio from '@/components/Portfolio'
import Header from '@/components/header'
import '@/styles/global.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
	title: 'Web Blog',
	description: 'Web Blog',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AntdRegistry>
					<ConfigProvider>
						<main>
							<Portfolio />
							<div className='container'>
								<Header />
								{children}
							</div>
						</main>
					</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	)
}
