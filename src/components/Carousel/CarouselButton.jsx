import styles from './CarouselButton.module.scss'

export default function CarouselButton({ direction, disable, onClick }) {
	return (
		<div
			className={`${styles.icon_button} ${
				direction === 'left' ? styles.left : styles.right
			} ${disable ? styles.disable : ''}`}
			onClick={onClick}
		></div>
	)
}
