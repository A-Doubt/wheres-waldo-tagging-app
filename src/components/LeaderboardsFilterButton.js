import capitaliseFirstLetter from './helpers/capitaliseFirstLetter';

export default function LeaderboardsFilterButton(props) {
	function handleClick(e) {
		props.handleClick(e, props.scenery);
	}

	return (
		<button
			className={
				props.scenery === props.activeFilter
					? 'leaderboards--tile active'
					: 'leaderboards--tile'
			}
			onClick={handleClick}
		>
			<img
				src={require(`../assets/wheres-waldo-${props.scenery}.jpg`)}
				className="level-image"
				alt=""
			/>
			<h3>{capitaliseFirstLetter(props.scenery)}</h3>
		</button>
	);
}
