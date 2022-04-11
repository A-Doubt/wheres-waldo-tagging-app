import React from 'react';
import CharToFind from './CharToFind';
import Popup from './Popup';

export default function Beach() {
	const [popupVisible, setPopupVisible] = React.useState(false);
	const [coords, setCoords] = React.useState({ x: null, y: null });
	const [isFound, setIsFound] = React.useState({
		waldo: false,
		odlaw: false,
		wizard: false,
	});
	const [tileClicked, setTileClicked] = React.useState(null);

	function tag(e) {
		setCoords({ x: e.pageX, y: e.pageY });

		const gameTile = {
			x: Math.round(
				(e.nativeEvent.offsetX / e.target.offsetWidth) * 1000
			),
			y: Math.round(
				(e.nativeEvent.offsetY / e.target.offsetHeight) * 1000
			),
		};
		setTileClicked(gameTile);
		setPopupVisible((prevState) => !prevState);
	}

	function handleClick(value) {
		setPopupVisible(false);
		console.log('TILE CLICKED :', tileClicked);
		console.log(value);
		if (
			value === 'waldo' && 
			(475 < tileClicked.x && tileClicked.x < 500) && 
			(450 < tileClicked.y && tileClicked.y < 525)
		)
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, waldo: true})
			})
		console.log(isFound);
	}

	return (
		<>
			<div className="game--page">
				<h1>Characters to find:</h1>
				<ul className="game--to-find">
					<CharToFind name="Waldo" />
					<CharToFind name="Odlaw" />
					<CharToFind name="Wizard" />
				</ul>
				<img
					src={require('../assets/wheres-waldo-5e.jpg')}
					alt=""
					className="game-img"
					onClick={tag}
				/>
			</div>
			<Popup
				coords={coords}
				popupVisible={popupVisible}
				handleClick={(value) => handleClick(value)}
			/>
		</>
	);
}
