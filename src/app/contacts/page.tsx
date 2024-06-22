import Contact from '@/components/Contact/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты | frontend developer Bomko Alexey',
}

export default function Contacts() {
	return (
		<>
			<Contact />
		</>
	)
}
