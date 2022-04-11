import React, { useRef } from 'react';
import CharToFind from './CharToFind';
import Popup from './Popup';

export default function GameLevel(props) {
	const [popupVisible, setPopupVisible] = React.useState(false);
	const [coords, setCoords] = React.useState({ x: null, y: null });
	const [isFound, setIsFound] = React.useState({
		waldo: true,
		odlaw: true,
		wizard: false,
	});
	const [tileClicked, setTileClicked] = React.useState(null);
	const [isWin, setIsWin] = React.useState(false);
	const [gameLength, setGameLength] = React.useState(null);
	const [gratzPopupVisible, setGratzPopupVisible] = React.useState(false);

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
		console.log(gameTile);
		setPopupVisible((prevState) => !prevState);
	}

	function handleClick(value) {
		setPopupVisible(false);

		if (
			value === 'waldo' && 
			(props.waldo.x1 < tileClicked.x && tileClicked.x < props.waldo.x2) && 
			(props.waldo.y1 < tileClicked.y && tileClicked.y < props.waldo.y2)
		) {
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, waldo: true})
			})
		}
		else if (value === 'odlaw' && 
			(props.odlaw.x1 < tileClicked.x && tileClicked.x < props.odlaw.x2) && 
			(props.odlaw.y1 < tileClicked.y && tileClicked.y < props.odlaw.y2)
		) {
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, odlaw: true})
			})
		}
		else if (value === 'wizard' && 
			(props.wizard.x1 < tileClicked.x && tileClicked.x < props.wizard.x2) && 
			(props.wizard.y1 < tileClicked.y && tileClicked.y < props.wizard.y2)
		) {
			setIsFound((prevIsFound) => {
				return ({...prevIsFound, wizard: true})
			})
		}
	}

	const gameStart = useRef(new Date().getTime());
	const gameEnd = useRef(new Date().getTime());

	React.useEffect(() => {
		console.log(isFound);
		if (isWin) return;
		if (isFound.waldo && isFound.odlaw && isFound.wizard) {
			gameEnd.current = new Date().getTime();
			console.log('GRATZ!');
			setIsWin(true);
			setGratzPopupVisible(true);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFound]);

	React.useEffect(() => {
		setGameLength(parseFloat(((gameEnd.current - gameStart.current) / 1000).toFixed(2)));

		console.log(gameLength);
	}, [isWin, gameLength])

	return (
		<>
			{gratzPopupVisible && (
				<>
					<div className="game--win-popup">Congratulations!</div>
					<p>You found all characters in {gameLength}s!</p>
				</>
			)}
			<div className="game--page">
				<h1>Characters to find:</h1>
				<ul className="game--to-find">
					<CharToFind name="Waldo" />
					<CharToFind name="Odlaw" />
					<CharToFind name="Wizard" />
				</ul>
				<img
					src={require(`../assets/wheres-waldo-${props.scenery}.jpg`)}
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