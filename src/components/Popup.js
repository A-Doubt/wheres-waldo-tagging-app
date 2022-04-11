export default function Popup(props) {

	const popupStyle = {
		left: `${props.coords.x}px`,
		top: `${props.coords.y}px`,
	}

	return (
		<>
			{props.popupVisible && 
				<div className="popup" style={popupStyle}>
					<button onClick={() => props.handleClick('waldo')}>
						<p>Waldo</p>
						<img src={require("../assets/waldo-face100.png")} alt="waldo"/>
					</button>
					<button onClick={() => props.handleClick('odlaw')}>
						<p>Odlaw</p>
						<img src={require("../assets/odlaw-face100.png")} alt="odlaw"/>
					</button>
					<button onClick={() => props.handleClick('wizard')}>
						<p>Wizard</p>
						<img src={require("../assets/wizard-face100.png")} alt="wizard"/>
					</button>
				</div>
			}
		</>
	)
}