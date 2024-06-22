'use client'

import { IItemPosts } from '@/app/blog/page'
import { FC, FormEventHandler, useState } from 'react'
import { usePosts } from '../../../store'


type Props = {
	onSearch: (value: IItemPosts[]) => void
}

export const PostSearch: FC<Props> = ({onSearch}:Props ):React.ReactNode => {

	const [search, setSearch] = useState<string>('')
	const getPostsBySearch = usePosts(state => state.getPostsBySearch)

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()
		await getPostsBySearch(search)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='search'
				placeholder='search'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</form>
	)
}
