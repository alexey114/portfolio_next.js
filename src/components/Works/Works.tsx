import styles from './Works.module.scss'

interface IWorks {
	name: string
	city: string
	date: string
	post: string
	description: string
}

const works: IWorks[] = [
	{
		name: 'Цифровой результат',
		city: 'Москва',
		date: '03.2023 - 04.2024',
		post: 'Frontend разработчик',
		description: 'Разработка веб / мобильных приложений в рамках госконтрактов',
	},
	{
		name: 'Цифровой результат',
		city: 'Москва',
		date: '10.2021 - 02.2023',
		post: 'Младший Frontend разработчик',
		description:
			'Разработка веб приложений в рамках госконтрактов, а так же работа над внутренними программами / компонентами компании',
	},
	{
		name: 'Частная практика',
		city: 'Москва',
		date: '04.2021 - 09.2021',
		post: 'Самостоятельная практика',
		description:
			'Создание и вёрстка сайтов в рамках пет-проектов. Работа с CI/CD для развертывания в публичном пространстве.',
	},
]

export default function Works() {
	return (
		<div className={styles.works}>
			<h3>Мой коммерческий и практический опыт:</h3>
			<ul>
				{works.map((work: IWorks) => (
					<li key={work.date}>
						<div className={styles.works_block}>
							<div className={styles.work_block}>
								<div className={styles.work_name}>
									{work.name}, {work.city}
								</div>
								<div className={styles.work_date}>{work.date}</div>
							</div>
							<div className={styles.work_circle}></div>
							<div className={styles.work_block}>
								<div className={styles.work_post}>{work.post}</div>
								<div className={styles.work_description}>{work.description}</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
