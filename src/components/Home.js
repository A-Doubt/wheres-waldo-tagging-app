import { Link } from 'react-router-dom';
import CharToFind from './CharToFind';

export default function Home() {
	return (
		<main>
			<h1>Choose a scenery!</h1>
			<section className="choose-level">
				<div className="level-tile">
					<Link to="/space">
						<h3>Space</h3>
						<img
							src={require('../assets/wheres-waldo-space.jpg')}
							className="level-image"
							alt=""
						/>
					</Link>
					<p>Characters to find:</p>
					<ul className="characters">
						<CharToFind name="Waldo"/>
						<CharToFind name="Odlaw"/>
						<CharToFind name="Wizard"/>
					</ul>
				</div>
				<div className="level-tile">
					<Link to="/mountain">
						<h3>Mountain</h3>
						<img
							src={require('../assets/wheres-waldo-mountain.jpg')}
							className="level-image"
							alt=""
						/>
					</Link>
					<p>Characters to find:</p>
					<ul className="characters">
						<CharToFind name="Waldo"/>
						<CharToFind name="Odlaw"/>
						<CharToFind name="Wizard"/>
					</ul>
				</div>
				<div className="level-tile">
					<Link to="/beach">
						<h3>Beach</h3>
						<img
							src={require('../assets/wheres-waldo-beach.jpg')}
							className="level-image"
							alt=""
						/>
					</Link>
					<p>Characters to find:</p>
					<ul className="characters">
						<CharToFind name="Waldo"/>
						<CharToFind name="Odlaw"/>
						<CharToFind name="Wizard"/>
					</ul>
				</div>
			</section>
		</main>
	);
}
