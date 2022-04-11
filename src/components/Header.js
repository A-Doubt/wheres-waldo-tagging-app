import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<Link to="/">
				<p className="header--link">Play!</p>
			</Link>
			<Link to="/leaderboards">
				<p className="header--link">Leaderboards</p>
			</Link>
			<h1>Where's Waldo?</h1>
			<img src={require('../assets/waldo-face.png')} alt="waldo"/>
		</header>
	)
}