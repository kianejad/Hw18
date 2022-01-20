import React from 'react';
import styles from './Doshboard.module.css';
import { CardBox } from 'components/index';
import {
	Uber,
	Mailchimp,
	breitling,
	Reveal,
	hamilton,
	movado,
	logo,
	ImageMacBook,
	CardOne,
	CardTwo,
	CardThree,
	CardFour,
	CardFive,
	CardSix,
	CardSeven,
	AvatarOne,
	AvatarTwo,
	AvatarThree,
	AvatarFour,
	AvatarFive,
	AvatarSix,
	AvatarSeven
} from 'asset';
import { HiMenu } from 'react-icons/hi';
import { Outlet, Link } from 'react-router-dom';
function Dashboard() {
	return (
		<>
			<div className={styles.sectionOne}>
				<div className={styles.container}>
					<span>
						<li className={styles.logo}>
							<img src={logo} alt="logo Diprella" />
						</li>
						<li className={styles.logoName}>Diprella</li>
						<li className={styles.inputHeader}>
							<input
								type="text"
								placeholder="&#xf002; Search . . ."
							/>
						</li>
					</span>
				</div>
			</div>
			<div className={styles.bodyContainer}>
				<div className={styles.sectionTwo}>
					<h1>Ulimited Access to Over 15,000 Courses</h1>
				</div>
				<div className={styles.sectionThree}>
					<nav className={styles.naviBar}>
						<li>
							<a href="#">Design</a>
						</li>
						<li>
							<a href="#">Css</a>
						</li>
						<li>
							<a href="#">Html</a>
						</li>
						<li>
							<a href="#">JavaScript</a>
						</li>
						<li>
							<a href="#">Ruby</a>
						</li>
						<li>
							<a href="#">WordPress</a>
						</li>
						<li>
							<a href="#">Java</a>
						</li>
						<li>
							<a href="#">Business</a>
						</li>
					</nav>
				</div>
				<div className={styles.sectionfour}>
					<CardBox
						image={CardOne}
						title={'Design'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quas tenetur ad hic!'
						}
						date={'17 Aug 2021'}
						avatar = {AvatarOne}
						titleAvatar={'Selecto'}
						descriptionAvatar ={'IT-Company'}
						price ={'Free'}
					/>
					<CardBox
						image={CardFour}
						title={'Design'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quas tenetur ad hic!'
						}
						date={'17 Aug 2021'}
						avatar = {AvatarTwo}
						titleAvatar={'Selecto'}
						descriptionAvatar ={'IT-Company'}
						price ={'$199'}
					/>
					<CardBox
						image={CardFive}
						title={'Design'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quas tenetur ad hic!'
						}
						date={'17 Aug 2021'}
						avatar = {AvatarThree}
						titleAvatar={'Selecto'}
						descriptionAvatar ={'IT-Company'}
						price ={'$299'}
					/>
				</div>
			</div>
		</>
	);
}

export { Dashboard };
