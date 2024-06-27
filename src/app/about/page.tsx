import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Обо мне | frontend developer Bomko Alexey',
}

export default function About() {
	return (
		<div>
			<h3>About</h3>
			Путешествия
			Спорт
			Инвестиции
			Образование
			Написание кода
		</div>
	)
}
