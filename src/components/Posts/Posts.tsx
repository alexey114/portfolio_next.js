// 'use client'

// import { IItemPosts } from '@/app/blog/page'
// import Link from 'next/link'
// import { FC, useEffect } from 'react'
// import { shallow } from 'zustand/shallow'
// import { usePosts } from '../../../store'

// export interface IItemsPosts {
// 	posts: IItemPosts[]
// }

// const Posts: FC<IItemsPosts> = (): React.ReactNode => {
// 	const [posts, loading, getAllPosts] = usePosts(
// 		state => [state.posts, state.loading, state.getAllPosts],
// 		shallow
// 	)
// 	useEffect(() => {
// 		getAllPosts()
// 	}, [getAllPosts])

// 	return loading ? (
// 		<h1>Loading...</h1>
// 	) : (
// 		<ul>
// 			{posts.map((post: IItemPosts) => (
// 				<li key={post.id}>
// 					<Link href={`/blog/${post.id}`}>{post.title}</Link>
// 				</li>
// 			))}
// 		</ul>
// 	)
// }

// export { Posts }

