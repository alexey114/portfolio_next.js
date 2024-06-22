import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.scss'

const navigationItems = [
	{ label: 'Главная', href: '/' },
	// { label: 'Блог', href: '/blog' },
	// { label: 'Обо мне', href: '/about' },
	{ label: 'Резюме', href: '/resume' },
	{ label: 'Проекты', href: '/projects'},
	{ label: 'Контакты', href: '/contacts' },
]

const Header = () => {
	return (
		<header className={styles.header}>
			<a className={styles.logo} href='https://github.com/alexey114' target='_blank'>
				Бомко Алексей
			</a>
			<nav className={styles.nav}>
				<Navigation navigationLinks={navigationItems} />
			</nav>
		</header>
	)
}

export { Header }

