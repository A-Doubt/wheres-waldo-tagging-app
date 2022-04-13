import React from 'react';
import capitaliseFirstLetter from './helpers/capitaliseFirstLetter';

export default function Leaderboards() {
	const sampleData = [
		{
			id: 1,
			name: 'Arnold',
			scenery: 'beach',
			length: 23.44,
			date: new Date().getTime(),
		},
		{
			id: 2,
			name: '',
			scenery: 'beach',
			length: 11.1,
			date: new Date().getTime(),
		},
		{
			id: 3,
			name: 'Charlie',
			scenery: 'beach',
			length: 2.31,
			date: new Date().getTime(),
		},
		{
			id: 4,
			name: 'wwwwwwwwwwwwwwwwwwww',
			scenery: 'mountain',
			length: 44.52,
			date: new Date().getTime(),
		}
	]

	const [displayedLevel, setDisplayedLevel] = React.useState()

	sampleData.sort((a, b) => {
		if (a.length < b.length) return -1;
		if (a.length > b.length) return 1;
		return 0;
	})

	const tableElements = sampleData.map((entry) => {
		return (
			<tr key={entry.id}>
				<td>{entry.name}</td>
				<td>{entry.length}s</td>
				<td>{capitaliseFirstLetter(entry.scenery)}</td>
				<td>{(new Date(entry.date)).toLocaleString('en-GB')}</td>
			</tr>
		)
	})

	function handleClick(e, value) {
		console.log(e.target)
		setDisplayedLevel(value);
	}

	return (
		<div className="leaderboards">
			<h1>Leaderboards</h1>
			<div className="leaderboards--tiles">
				<button 
					className="leaderboards--tile" 
					onClick={(e) => handleClick(e, 'space')} 
				>
					<img
						src={require(`../assets/wheres-waldo-space.jpg`)}
						className="level-image"
						alt=""
						
					/>
					<h3>Space</h3>
				</button>
				<button 
					className="leaderboards--tile" 
					onClick={(e) => handleClick(e, 'mountain')} 
				>
					<img
						src={require(`../assets/wheres-waldo-mountain.jpg`)}
						className="level-image"
						alt=""
					/>
					<h3>Mountain</h3>
				</button>
				<button 
					className="leaderboards--tile" 
					onClick={(e) => handleClick(e, 'beach')} 
				>
					<img
						src={require(`../assets/wheres-waldo-beach.jpg`)}
						className="level-image"
						alt=""
						/>
					<h3>Beach</h3>
				</button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Time</th>
						<th>Level</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{tableElements}
				</tbody>
			</table>
		</div>
	)
}
