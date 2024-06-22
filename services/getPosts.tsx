export default async function getAllPosts() {
	// функции со страницы мы не экспортируем

	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 60, // время для отправки повторного запроса
		},
	}) // fetch в случае с SSR дополнен некоторыми возможностями

	if (!res.ok) throw new Error('Network response was not ok')

	return res.json()
}

export const getPostsBySearch = async (search: string) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?q=${search}`
	)

	if (!response.ok) throw new Error('Unable to fetch posts.')

	return response.json()
}
