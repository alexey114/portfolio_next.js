'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './Carousel.module.scss'
import CarouselButton from './CarouselButton'

export default function Carousel({ data }) {
	const [activeId, setActiveId] = useState(0)

	const prev = () => {
		setActiveId(activeId => {
			if (activeId > 0) {
				return activeId - 1
			}
			return activeId
		})
	}

	const next = () => {
		setActiveId(activeId => {
			if (activeId < data.length - 1) {
				return activeId + 1
			}
			return activeId
		})
	}

	return (
		<>
			<div className={styles.carousel_buttons}>
				<CarouselButton
					direction='left'
					onClick={prev}
					disable={activeId === 0}
				/>
				<CarouselButton
					direction='right'
					onClick={next}
					disable={activeId === data.length}
				/>
			</div>
			<ul className={styles.carousel}>
				{data
					? data.map((slide, idx) => (
							<div
								key={slide.id}
								className={`${styles.carousel_item} ${
									idx === activeId ? styles.active : ''
								}`}
							>
								<div className={styles.carousel_item_info}>
									<div className={styles.carousel_item_label}>{slide.id}</div>
									<div className={styles.carousel_item_title}>{slide.title}</div>
									<Image
										className={styles.carousel_image}
										src={slide.imageUrl}
										alt='Моё фото'
										width={700}
										height={700}
										// placeholder='blur'
									/>
								</div>
							</div>
					  ))
					: null}
			</ul>
		</>
	)
}
