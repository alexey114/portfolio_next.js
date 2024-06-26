import styles from './Skills.module.scss'

interface ISkill {
	title: string,
	skills: string
}

export function Skill({ title, skills }: ISkill) {
	return (
	  <div className={styles.skills_items}>
		<div className={styles.skills_title}>{title}:</div>
		{skills.map((skill, index) => (
		  <div className={styles.skill} key={index}>
			{skill}
		  </div>
		))}
	  </div>
	);
  };
