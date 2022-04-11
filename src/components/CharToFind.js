import waldoImg from '../assets/waldo.png';
import odlawImg from '../assets/odlaw.jpg';
import wizardImg from '../assets/wizard.gif';


export default function CharToFind(props) {

	let img;
	if (props.name === 'Waldo') img = waldoImg;
	else if (props.name === 'Odlaw') img = odlawImg;
	else if (props.name === 'Wizard') img = wizardImg;

	return (
		<li>
			{props.name}
			<img
				src={img}
				alt={props.name}
				className="img-small"
			/>
		</li>
	);
}
