import React, { Component } from 'react';
import './Login.page.css';
import axios from 'axios';
import { AnimatedLogin } from 'components';
const baseURL = 'https://61e38506fbee6800175eb046.mockapi.io/user';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			maskStyle: {
				left: 512,
				right: 0
			},
			AddUser: {
				name: '',
				email: '',
				password: ''
			},
			persons: null,
			loginUser: {
				email: '',
				password: ''
			}
		};
		axios.get(baseURL).then(res => {
			const persons = res.data;
			this.setState({ persons });
		});
		this.container = React.createRef();
		this.onSignIn = this.onSignIn.bind(this);
		this.onSignUp = this.onSignUp.bind(this);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	componentDidMount() {}
	onSignUp() {
		this.container.current.classList.add('right-panel-active');
		console.log('sign up btn');
		const inputValue = document.getElementsByClassName('loginInput');
		inputValue.value = '';
		console.log(this.state.AddUser);
		axios
			.post(baseURL, {
				name: this.state.AddUser.name,
				email: this.state.AddUser.email,
				password: this.state.AddUser.password
			})
			.then(response => {
				console.log(response);
			});
	}
	onSignIn() {
		this.container.current.classList.remove('right-panel-active');
		console.log(this.state);
		const inputEmail = document.getElementById('emailInput');
		const inputPassword = document.getElementById('passwordInput');
		const passAlert = document.getElementById('alertPass');
		const emailAlert = document.getElementById('alertEmail');
		let emailValidation = null;
		let passwordValidation = null;
		inputPassword.classList.add('wrong');
		passAlert.classList.remove('d-none');
		inputEmail.classList.add('wrong');
		passAlert.classList.remove('d-none');
		emailAlert.classList.remove('d-none');
		this.state.persons.map((items, index) => {
			if (items.email === this.state.loginUser.email) {
				emailValidation = true;
				inputPassword.classList.add('wrong');
				passAlert.classList.remove('d-none');
				inputEmail.classList.add('correct');
				emailAlert.classList.add('d-none');
				console.log('email is correct');
				if (
					this.state.persons[index].password ==
					this.state.loginUser.password
				) {
					passwordValidation = true;
					inputPassword.classList.remove('wrong');
					passAlert.classList.add('d-none');
					inputPassword.classList.add('correct');
					inputEmail.classList.remove('wrong');
					inputEmail.classList.add('correct');
					console.log('password and email is correct');
					this.props.navigate('/dashboard');
				}
			}
		});
	}
	render() {
		const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`;
		return (
			<div className="bodyLogin">
				<div className="container" id="container" ref={this.container}>
					<div className="form-container sign-up-container">
						<form action="#">
							<h1>Create Account</h1>
							<div className="social-container">
								<a href="#" className="social">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-google-plus-g"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
							<span>or use your email for registration</span>
							<input
								className="loginInput"
								type="text"
								placeholder="&#xf007;   Name"
								onChange={e => {
									return (this.state.AddUser.name =
										e.target.value);
								}}
								required
							/>
							<input
								className="loginInput"
								type="email"
								placeholder="&#xf0e0;   Email"
								onChange={e => {
									return (this.state.AddUser.email =
										e.target.value);
								}}
								required
							/>
							<input
								className="loginInput"
								type="password"
								placeholder="&#xf084;   Password"
								onChange={e => {
									return (this.state.AddUser.password =
										e.target.value);
								}}
								required
							/>
							<button onClick={this.onSignUp}>Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form action="#">
							<h1>Sign in to Diprella</h1>
							<div className="social-container">
								<a href="#" className="social">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-google-plus-g"></i>
								</a>
								<a href="#" className="social">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
							<span>or use your account</span>
							<input
								className="loginInput"
								id="emailInput"
								type="email"
								placeholder="&#xf0e0;   Email"
								onFocus={e => {
									axios.get(baseURL).then(res => {
										const persons = res.data;
										this.setState({ persons });
									});
									console.log(this.state);
								}}
								onChange={e => {
									this.state.loginUser.email = e.target.value;
								}}
							/>
							<span id="alertEmail" className="d-none">
								<p>Your Email is incorrect</p>
							</span>
							<input
								className="loginInput"
								id="passwordInput"
								type="password"
								placeholder="&#xf023;   Password"
								onChange={e => {
									this.state.loginUser.password =
										e.target.value;
								}}
							/>
							<span id="alertPass" className="d-none">
								<p>Your password is incorrect</p>
							</span>
							<a href="#">Forgot your password?</a>
							<button onClick={this.onSignIn}>Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<AnimatedLogin />
							<div className="LoginBackAnimate">
								<AnimatedLogin />
							</div>
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>
									To keep connected with us please login with
									your personal info
								</p>
								<button
									className="ghost"
									id="signIn"
									onClick={this.onSignIn}
								>
									Sign In
								</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>
									Enter your personal details and start
									journey with us
								</p>
								<button
									className="ghost"
									id="signUp"
									onClick={this.onSignUp}
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export { Login };
