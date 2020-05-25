import React from 'react';
import { Router } from '@reach/router'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Home from './components/Home'
import Navigation from './components/Navigation'
import './App.css';

function App() {
	const navLinks = [
		{
			text: 'Home',
			path: '/',
			icon: 'ion-ios-home'
		},
		{
			text: 'Contact',
			path: '/contact',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'About',
			path: '/about',
			icon: 'ion-ios-business'
		},
		{
			text: 'Blog',
			path: '/blog',
			icon: 'ion-ios-bonfire'
		},
		{
			text: 'Portfolio',
			path: '/portfolio',
			icon: 'ion-ios-briefcase'
		}
	]

	return (
		<div className="App">
			<Navigation
				navLinks={ navLinks }
				background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
			<Router>
				<Contact path="/contact" />
				<Home path="/home" />
				<Portfolio path="/portfolio" />
				<Blog path="/blog" />
				<About path="/about" />
			</Router>
		</div>
	);
}
export default App;