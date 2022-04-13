import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CharToFind from './CharToFind';
import Popup from './Popup';
import { db } from '../index';
import { collection, addDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid'
import { useNavigate } from "react-router-dom";

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
	const [nameInput, setNameInput] = React.useState({ value: '' });

	let navigate = useNavigate();

	// FIREBASE CODE SECTION
	// console.log('DATABASE: ', db);
	async function postScore(entry) {
		try {
			const docRef = await addDoc(collection(db, 'score'), entry);
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}

	//****************************************************************
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
			props.waldo.x1 < tileClicked.x &&
			tileClicked.x < props.waldo.x2 &&
			props.waldo.y1 < tileClicked.y &&
			tileClicked.y < props.waldo.y2
		) {
			setIsFound((prevIsFound) => {
				return { ...prevIsFound, waldo: true };
			});
		} else if (
			value === 'odlaw' &&
			props.odlaw.x1 < tileClicked.x &&
			tileClicked.x < props.odlaw.x2 &&
			props.odlaw.y1 < tileClicked.y &&
			tileClicked.y < props.odlaw.y2
		) {
			setIsFound((prevIsFound) => {
				return { ...prevIsFound, odlaw: true };
			});
		} else if (
			value === 'wizard' &&
			props.wizard.x1 < tileClicked.x &&
			tileClicked.x < props.wizard.x2 &&
			props.wizard.y1 < tileClicked.y &&
			tileClicked.y < props.wizard.y2
		) {
			setIsFound((prevIsFound) => {
				return { ...prevIsFound, wizard: true };
			});
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
		setGameLength(
			parseFloat(
				((gameEnd.current - gameStart.current) / 1000).toFixed(2)
			)
		);

		console.log(gameLength);
	}, [isWin, gameLength]);

	function handleInputChange(e) {
		setNameInput({ value: e.target.value });
	}

	function handleAddScore(name, scenery, length) {

		const newEntry = {
			id: nanoid(),
			name: name,
			scenery: scenery,
			length: length,
			date: new Date().getTime(),
		}
		console.log(newEntry);
		postScore(newEntry);
		navigate("/leaderboards");
	}

	return (
		<>
			{gratzPopupVisible && (
				<>
					<div className="game--win-popup">
						<div className="game--win-form">
							<p className="gratz-message">Congratulations!</p>
							<p className="gratz-message">
								you finished in:
								<span className="game-time">
									{' '}
									{gameLength}s!
								</span>
							</p>
							<label htmlFor="username">
								Enter your name: (max 20 characters)
							</label>
							<div className="flex-row">
								<input
									type="text"
									maxLength="20"
									id="username"
									autoComplete="off"
									placeholder="name"
									onChange={handleInputChange}
									value={nameInput.value}
								></input>
								<button
									className="red-btn add"
									onClick={() =>
										handleAddScore(
											nameInput.value,
											props.scenery,
											gameLength
										)
									}
								>
									Add score
								</button>
							</div>
							<div className="flex-row">
								<Link to="/leaderboards">
									<button className="red-btn">
										View Leaderboards
									</button>
								</Link>
							</div>
						</div>
					</div>
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
