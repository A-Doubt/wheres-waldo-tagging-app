import React from 'react';
import LeaderboardsFilterButton from './LeaderboardsFilterButton';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../index';
import formatData from './helpers/formatData';

export default function Leaderboards() {
	// gather data from firebase
	React.useEffect(() => {
		(async function getData() {
			const querySnapshot = await getDocs(collection(db, 'score'));
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push(doc.data());
			});
			setFetchedData(data);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [activeFilter, setActiveFilter] = React.useState('space');
	const [table, setTable] = React.useState([]);
	const [fetchedData, setFetchedData] = React.useState([]);

	// select a filter
	function selectFilter(e, value) {
		setActiveFilter(value);
	}

	// create the table
	React.useEffect(() => {
		setTable(formatData(fetchedData, activeFilter));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchedData, activeFilter]);

	return (
		<div className="leaderboards">
			<h1>Leaderboards</h1>
			<div className="leaderboards--tiles">
				<LeaderboardsFilterButton
					scenery="space"
					handleClick={(e, value) => selectFilter(e, value)}
					activeFilter={activeFilter}
				/>
				<LeaderboardsFilterButton
					scenery="mountain"
					handleClick={(e, value) => selectFilter(e, value)}
					activeFilter={activeFilter}
				/>
				<LeaderboardsFilterButton
					scenery="beach"
					handleClick={(e, value) => selectFilter(e, value)}
					activeFilter={activeFilter}
				/>
			</div>
			{fetchedData.length ? (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Time</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>{table}</tbody>
				</table>
			) : (
				<div className="loading">
					<h1>FETCHING DATA...</h1>
					<img
						src={require('../assets/Spinner-1s-200px.gif')}
						alt="loading"
					/>
				</div>
			)}
		</div>
	);
}
