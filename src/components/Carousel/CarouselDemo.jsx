'use client'

import projects from '../../../public/projects.json'
import Carousel from './Carousel'


export default function CarouselDemo({ children }) {

	console.log("projects", projects);

	return (
		<div>
			<Carousel data={projects}/>
		</div>
	)
}

{/* <Image
className={styles.carousel_image}
src={photo}
alt='Моё фото'
// width={700}
placeholder='blur'
/>
<Image
className={styles.carousel_image}
src={photo}
alt='Моё фото'
// width={700}
placeholder='blur'
/>
<Image
className={styles.carousel_image}
src={photo}
alt='Моё фото'
// width={700}
placeholder='blur'
/>
<Image
className={styles.carousel_image}
src={photo}
alt='Моё фото'
// width={700}
placeholder='blur'
/>
<Image
className={styles.carousel_image}
src={photo}
alt='Моё фото'
// width={700}
placeholder='blur'
/>
<Image
className={styles.carousel_image}
src={photo}
alt='Моё фото'
// width={700}
placeholder='blur'
/> */}
