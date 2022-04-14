import LevelTile from './LevelTile';

export default function Home() {
	return (
		<main>
			<h1>Choose a scenery!</h1>
			<section className="choose-level">
				<LevelTile scenery="space" />
				<LevelTile scenery="mountain" />
				<LevelTile scenery="beach" />
			</section>
		</main>
	);
}
