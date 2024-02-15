import React from "react";
import { useState, useEffect } from "react";

import styles from "./slider.module.scss";

const SliderHero = (props) => {
	const { slides, pace } = props;
	const [current, setCurrent] = useState(1);
	const length = slides.length;

	useEffect(() => {
		let timeout = setTimeout(() => {
			if (current >= 0) {
				setCurrent(current === length - 1 ? 0 : current + 1);
			} else {
				setCurrent(0);
			}
			return () => {
				clearTimeout(timeout);
			};
		}, pace);
	}, [current, length, pace]);

	return (
		<>
			<div className={styles.slider}>
				<div className={styles.slider}>
					{slides.map((slide, index) => {
						return (
							<div
								key={index}
								className={
									index === current
										? `${styles.slider__item}` && `${styles.active}`
										: `${styles.slider__item}`
								}
							>
								{index === current && (
									<img
										src={slide.image}
										alt={slide.alt}
										className={`${styles.slider__img}`}
									></img>
								)}
							</div>
						);
					})}
				</div>
				{props.children}
			</div>
		</>
	);
};

export default SliderHero;
