// sort data by game length
function sortData(dataArray) {
	dataArray.sort((a, b) => {
		if (a.length < b.length) return -1;
		if (a.length > b.length) return 1;
		return 0;
	});
	return dataArray;
}

// filter games according to level selected
function filterData(dataArray, filter) {
	return dataArray.filter((entry) => {
		return entry.scenery === filter;
	});
}

// create table elements from each element in data
function createTableElements(dataArray) {
	const tableElements = dataArray.map((entry) => {
		return (
			<tr key={entry.id}>
				<td>{entry.name}</td>
				<td>{entry.length}s</td>
				<td>{new Date(entry.date).toLocaleString('en-GB')}</td>
			</tr>
		);
	});
	return tableElements;
}

// combine the above
function formatData(data, filter) {
	if (!data.length) return;
	sortData(data);
	const filteredData = filterData(data, filter);
	const table = createTableElements(filteredData);
	return table;
}

export default formatData;
