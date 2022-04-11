import React, { useRef } from 'react';
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
	const [isWin, setIsWin] = React.useState(false);
	const [gameLength, setGameLength] = React.useState(null);

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

		if (
			value === 'waldo' && 
			(475 < tileClicked.x && tileClicked.x < 500) && 
			(450 < tileClicked.y && tileClicked.y < 525)
		) {
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, waldo: true})
			})
		}
		else if (value === 'odlaw' && 
			(70 < tileClicked.x && tileClicked.x < 100) && 
			(550 < tileClicked.y && tileClicked.y < 620)
		) {
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, odlaw: true})
			})
		}
		else if (value === 'wizard' && 
			(930 < tileClicked.x && tileClicked.x < 960) && 
			(365 < tileClicked.y && tileClicked.y < 430)
		) {
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, wizard: true})
			})
		}
	}

	const gameStart = useRef(new Date().getTime());
	const gameEnd = useRef(new Date().getTime());

	React.useEffect(() => {
		if (isWin) return;
		if (isFound.waldo && isFound.odlaw && isFound.wizard) {
			gameEnd.current = new Date().getTime();
			console.log('GRATZ!');
			setIsWin(true);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFound]);

	React.useEffect(() => {
		setGameLength(parseFloat(((gameEnd.current - gameStart.current) / 1000).toFixed(2)));

		console.log(gameLength);
	}, [isWin, gameLength])

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
