import Header from './components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Leaderboards from './components/Leaderboards';
import GameLevel from './components/GameLevel';

function App() {
	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/leaderboards" element={<Leaderboards /> } />
				<Route 
					path="/space" 
					element={<GameLevel 
						scenery="space"
						waldo={{x1: 475, x2: 500, y1: 450, y2: 525}}
						odlaw={{x1: 70, x2: 100, y1: 550, y2: 620}}
						wizard={{x1: 930, x2: 960, y1: 365, y2: 430}}
					/> } />
				<Route 
					path="/mountain" 
					element={<GameLevel 
						scenery="mountain"
						waldo={{x1: 940, x2: 975, y1: 740, y2: 850}}
						odlaw={{x1: 345, x2: 365, y1: 620, y2: 680}}
						wizard={{x1: 65, x2: 90, y1: 780, y2: 860}}

				/> } />
				<Route 
					path="/beach" 
					element={<GameLevel 
						scenery="beach"
						waldo={{x1: 510, x2: 550, y1: 460, y2: 540}}
						odlaw={{x1: 230, x2: 256, y1: 465, y2: 570}}
						wizard={{x1: 610, x2: 640, y1: 460, y2: 550}}
				/> } />
			</Routes>
		</HashRouter>
	)
}

export default App;

// beach: 	odlaw x: 230-256 y: 465-570
// 			waldo x: 510-550 y:460-540
// 			wizard x: 610-640 y: 460-550