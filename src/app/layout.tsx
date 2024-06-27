import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'; // импорт шрифтов
import './globals.scss'

const inter = Inter({ subsets: ['latin'] }) // импорт шрифтов импортируется в виде функции

//добавляется на любую страницу
export const metadata: Metadata = {
	// Работа с СЕО страницы
	title: 'Портфолио | frontend developer Bomko Alexey',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
					<Header />
					<main>{children}</main>
					<Footer />
			</body>
		</html>
	)
}
