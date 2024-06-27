'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { responsive } from '../../public/projects.json'
// import styles from "../styles/Responsive.module.css"
export default function ResponsiveCarousel() {
	const res = responsive
	return (
		<div>
			<Carousel
				showArrows={true}
				showIndicators={true}
				infiniteLoop={true}
				dynamicHeight={false}
			>
				{res.map(item => (
					<div key={item.id}>
						<div>
							<img src={item.imageUrl} alt='slides' />
							
						</div>
						<div>
							<h2>{item.title}</h2>
							<p>{item.text}</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	)
}
