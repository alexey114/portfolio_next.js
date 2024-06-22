interface ISkill {
	title: string,
	skills: string
}

export function Skill({ title, skills }) {
	return (
	  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
		<div style={{ marginRight: '10px', fontWeight: 'bold' }}>{title}:</div>
		{skills.map((skill, index) => (
		  <div style={{ display: 'flex', backgroundColor: 'green', margin: 10, padding: '5px' }} key={index}>
			{skill}
		  </div>
		))}
	  </div>
	);
  };
