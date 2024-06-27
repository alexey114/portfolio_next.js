import { Metadata } from 'next'
import Project from '../../components/Project/Project'

export const metadata: Metadata = {
	title: 'Проекты | frontend developer Bomko Alexey',
}

export default function Projects() {
	return (
		<Project />
	)
}
