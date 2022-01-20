import React from 'react';
import styles from './CardBox.module.css';
function CardBox(props) {
	return (
		<div className={styles.box}>
			<div className={styles.sectionOne}>
				<figure>
					<img src={props.image} alt="photo card" />
				</figure>
				<span>
					<h6>{props.title}</h6>
					<h4>
						{props.description}
					</h4>
					<h5>{props.date}</h5>
				</span>
			</div>
			<div className={styles.sectionTwo}>
				<figure>
					<img src={props.avatar} alt="avatar" />
				</figure>
				<span>
					<h6>{props.titleAvatar}</h6>
					<p>{props.descriptionAvatar}</p>
				</span>
			</div>
			<div className={styles.sectionThree}>
				<h1>{props.price}</h1>
			</div>
		</div>
	);
}

export { CardBox };
