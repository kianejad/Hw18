import React from 'react';
import styles from './Home.module.css';
import { AnimatedBackground } from 'components';
import {
	Uber,
	Mailchimp,
	breitling,
	Reveal,
	hamilton,
	movado,
	logo,
	ImageMacBook
} from 'asset';
import { HiMenu } from 'react-icons/hi';
import { Outlet, Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.sectionOne}>
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
					<li className={styles.menuHeader}>
						<HiMenu />
					</li>
					<span className={styles.textAndBtn}>
						<a href="#">
							<li className={styles.TextOneHeader}>
								For Business{' '}
							</li>
						</a>
						<a href="#">
							<li className={styles.TextTwoHeader}>Sign In</li>
						</a>
						<li className={styles.headerBtn}>
							<Link to="/login">Start For Free</Link>
						</li>
					</span>
				</div>
			</div>
			<hr />
			<div className={styles.container}>
				<div className={styles.sectionTwo}>
					<span className={styles.menuSectionTwo}>
						<HiMenu />
					</span>
					<nav>
						<li>
							<a href="#">Development</a>
						</li>
						<li>
							<a href="#">Design</a>
						</li>
						<li>
							<a href="#">Business</a>
						</li>
						<li>
							<a href="#">Personal Development</a>
						</li>
						<li>
							<a href="#">Marketing</a>
						</li>
						<li>
							<a href="#">Language</a>
						</li>
						<li>
							<a href="#">Lisfestyle</a>
						</li>
						<li>
							<a href="#">Arts</a>
						</li>
					</nav>
				</div>
			</div>
			<div className={styles.sectionThree}>
				<AnimatedBackground />
				<div className={styles.boxAnimation}>
					<div className={styles.textMain}>
						<h1>
							The New Way <br />
							Online Courses
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ratione et distinctio nulla ut repellendus?
							Laborum unde fuga sapiente dolores!
						</p>
						<span>
							<Link to="/login" className={styles.linkMain}>
								Start Learning
							</Link>
							<a href="#">
								<h4 className={styles.questionMain}>
									Are you a teacher?
								</h4>
							</a>
						</span>
					</div>
					<div className={styles.boxImage}>
						<img src={ImageMacBook} alt="image mac book" />
					</div>
				</div>
				<div className={styles.branding}>
					<div className={styles.container}>
						<li>
							<img src={Uber} alt="" />
						</li>
						<li>
							<img src={Mailchimp} alt="" />
						</li>
						<li>
							<img src={breitling} alt="" />
						</li>
						<li>
							<img src={Reveal} alt="" />
						</li>
						<li>
							<img src={hamilton} alt="" />
						</li>
						<li>
							<img src={movado} alt="" />
						</li>
					</div>
				</div>
			</div>
		</>
	);
}

export { Home };
