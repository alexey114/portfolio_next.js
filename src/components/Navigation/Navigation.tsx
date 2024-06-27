'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'

interface INavigationLink {
	label: string
	href: string
}

type Props = {
	navigationLinks: INavigationLink[]
}

const Navigation = ({ navigationLinks }: Props) => {
	const pathname = usePathname()

	return (
		<>
			{navigationLinks.map(link => {
				const isActive = pathname === link.href

				return (
							<Link
								key={link.label}
								href={link.href}
								className={`${styles.link} ${isActive ? styles.active : ''}`}
							>
								{link.label}{' '}
							</Link>
				)
			})}
		</>
	)
}

export { Navigation }

