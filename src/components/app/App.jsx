import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundaty";

import decoration from '../../resources/img/spiderman.png';

const App = () => {
	const [selectedChar, setChar] = useState(null);

	const onCharSelected = (id) => setChar(id);
	
	return (
		<div className="app">
			<AppHeader />
			<main>
				<ErrorBoundary> <RandomChar /></ErrorBoundary>
				<div className="char__content">
					<CharList onCharSelected={onCharSelected} />
					<ErrorBoundary> <CharInfo charId={selectedChar} /></ErrorBoundary>
				</div>
				{/* <ComicsList/> */}
				<div className="box-decoration">
					<img className="bg-decoration" src={decoration} alt="vision" />
				</div>
				
			</main>
		</div>
	)

}



export default App;