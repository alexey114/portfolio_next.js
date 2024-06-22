// import { PostSearch } from '@/components/Posts/PostSearch'
// import { Posts } from '@/components/Posts/Posts'
// import { Metadata } from 'next'

// export interface IItemPosts {
// 	userId: number
// 	id: number
// 	title: string
// 	body: string
// }

// // export interface IItemsPosts {
// // 	posts: IItemPosts[]
// // }

// export const metadata: Metadata = {
// 	title: 'Blog frontend developer Bomko Alexey',
// }

// export default function Blog() {
// 	// функция в случае с SSR может быть асинхронная

// 	// за место хуков используем Zustand
// 	// const [posts, setPosts] = useState<IItemPosts[]>([])
// 	// const [isLoading, setIsLoading] = useState<boolean>(true)
// 	// useEffect(() => {
// 	// 	getAllPosts()
// 	// 		.then(setPosts)
// 	// 		.finally(() => setIsLoading(false))
// 	// }, [])

// 	return (
// 		<>
// 			<h1>Blog page</h1>
// 			{/* <PostSearch onSearch={setPosts} /> // Убираем при использовании state manager */} 
// 			<PostSearch />
// 			{/* {isLoading ? <h1>Loading...</h1> : <Posts posts={posts} />} // Убираем часть при использовании state manager */}
// 			<Posts />
// 		</>
// 	)
// }
