import CharToFind from './CharToFind';
import { Link } from 'react-router-dom';
import capitaliseFirstLetter from './helpers/capitaliseFirstLetter';

export default function LevelTile(props) {
	return (
		<div className="level-tile">
			<Link to={`/${props.scenery}`}>
				<h3>{capitaliseFirstLetter(props.scenery)}</h3>
				<img
					src={require(`../assets/wheres-waldo-${props.scenery}.jpg`)}
					className="level-image"
					alt=""
				/>
			</Link>
			<p>Characters to find:</p>
			<ul className="characters">
				<CharToFind name="Waldo" />
				<CharToFind name="Odlaw" />
				<CharToFind name="Wizard" />
			</ul>
		</div>
	);
}
