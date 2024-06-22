// import { IItemPosts } from '@/app/blog/page'
// import { create } from 'zustand'
// import getAllPosts, { getPostsBySearch } from '../services/getPosts'

// interface IUsePosts {
// 	posts: IItemPosts[],
// 	loading: boolean,
// 	getAllPosts: () => Promise<void>;
// 	getPostsBySearch: (value: string) => Promise<void>
// }

// export const usePosts = create<IUsePosts>()((set) => ({
// 	posts: [],
// 	loading: false,
// 	getAllPosts: async ()=> {
// 		set({loading: true})
// 		const posts = await getAllPosts()
// 		set({posts, loading: false})
// 	},
// 	getPostsBySearch: async (search: string)=> {
// 		set({loading: true})
// 		const posts = await getPostsBySearch(search)
// 		set({posts, loading: false})
// 	},
// }))