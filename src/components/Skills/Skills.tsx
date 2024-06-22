import { Skill } from './Skill'

interface ISkills {
	skills: []
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
		<div>
			<h1>Мои навыки:</h1>
			<div>
				<Skill title='Основной стек' skills={skills[0].basic} />
				<Skill title='Практический опыт' skills={skills[1].practice} />
				<Skill title='Сборщики' skills={skills[2].picker} />
				<Skill
					title='Работа с проектами'
					skills={skills[3]['project management']}
				/>
				<Skill title='Ознакомлен' skills={skills[4].principles} />
			</div>
		</div>
	)
}
