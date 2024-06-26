import { Skill } from './Skill'
import styles from './Skills.module.scss'

interface ISkills {
	basic: string[],
	practice: string[],
	picker: string[],
	'project management': string[],
	principles: string[],
}

interface ISkillsAll {
	skills: object[]
}

export default function Skills() {
	const skills = [
		{
			basic: ['HTML', 'CSS', 'SASS/LESS', 'JS', 'React', 'TypeScript', 'Redux'],
		},
		{
			practice: [
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
		{ picker: ['Webpack', 'Vite'] },
		{ 'project management': ['GIT', 'Gitea', 'Jira', 'Confluence'] },
		{ principles: ['БЭМ', 'ООП', 'SOLID', 'KYSS', 'DRY', 'YAGNI'] },
	]

	// {basic: 'HTML, CSS, SASS/LESS, JS, React, TypeScript, Redux'},
	// {practice:'Rest API, Websocket, Tailwind, React Native, Jest, CI/CD, Docker, Android Studio, Expo'},
	// {picker: 'Webpack, Vite'},
	// {'project management': 'GIT, Gitea, Jira, Confluence'},
	// {principles: 'БЭМ, ООП, SOLID, KYSS, DRY, YAGNI'},

	return (
		<section className={styles.skills}>
			<div className={styles.header}>
				<h2>Навыки:</h2>
			</div>
			<div className={styles.skills_items}>
				<Skill
					title='Основной стек'
					skills={skills[0].basic}
				/>
				<Skill
					title='Практический опыт'
					skills={skills[1].practice}
				/>
				<Skill
					title='Сборщики'
					skills={skills[2].picker}
				/>
				<Skill
					title='Работа с проектами'
					skills={skills[3]['project management']}
				/>
				<Skill
					title='Знаком'
					skills={skills[4].principles}
				/>
			</div>
		</section>
	)
}
