import styles from './Skills.module.scss'
interface ISkill {
	title: string
	skills: string[]
}

export function Skill({ title, skills }: ISkill) {
	return (
		<div className={styles.skills_item}>
				<h3 className={styles.skills_title}>{title}:</h3>
				<ul className={styles.skills_list}>
					{skills.map((skill: string, index: number) => (
						<li className={styles.skill} key={index}>
							{skill}
						</li>
					))}
				</ul>

		</div>
	)
}
