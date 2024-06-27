import Skills from '@/components/Skills/Skills'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Навыки | frontend developer Bomko Alexey',
}

export default function Resume(){
	return <Skills />
}