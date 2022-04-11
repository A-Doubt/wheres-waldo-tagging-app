import Header from './components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Leaderboards from './components/Leaderboards';
import Beach from './components/Beach';

function App() {
	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/leaderboards" element={<Leaderboards /> } />
				<Route path="/space" element={<Leaderboards /> } />
				<Route path="/convention" element={<Leaderboards /> } />
				<Route path="/beach" element={<Beach /> } />
			</Routes>
		</HashRouter>
	)
}

export default App;
