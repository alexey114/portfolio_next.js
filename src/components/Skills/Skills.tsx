'use client'

import { Skill } from './Skill'
import styles from './Skills.module.scss'

interface ISkills {
	'Основной стек'?: string[]
	'Работал на практике'?: string[]
	'Любимые сборщики'?: string[]
	'Управлял проектами'?: string[]
	'Посвящен в принципы'?: string[]
}

export default function Skills() {
	const skills: ISkills[] = [
		{
			'Основной стек': [
				'HTML',
				'CSS',
				'SASS/LESS',
				'JS',
				'React',
				'TypeScript',
				'Redux',
			],
		},
		{
			'Работал на практике': [
				'Rest API',
				'Websocket',
				'Tailwind',
				'React Native',
				'Jest',
				'CI/CD',
				'Docker',
				'Android Studio',
				'Expo',
			],
		},
		{ 'Любимые сборщики': ['Webpack', 'Vite'] },
		{ 'Управлял проектами': ['GIT', 'Gitea', 'Jira', 'Confluence'] },
		{ 'Посвящен в принципы': ['БЭМ', 'ООП', 'SOLID', 'KYSS', 'DRY', 'YAGNI'] },
	]

	return (
		<section className={styles.skills}>
			<div className={styles.skills_resume}>
				<a
					className={styles.skills_resume_save}
					href='./Resume_BomkoAlexey.pdf'
					download={'Резюме - Бомко Алексей'}
				>
					Скачать резюме
				</a>
			</div>
			<div className={styles.header}>
				<h2>Навыки:</h2>
			</div>
			<div className={styles.skills_items}>
				{skills.map((skillCategory, index) => {
					const categoryName = Object.keys(skillCategory)[0] as keyof ISkills
					const skillValues = skillCategory[categoryName]

					return skillValues ? (
						<Skill key={index} title={categoryName} skills={skillValues} />
					) : null
				})}
			</div>
		</section>
	)
}
