import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundaty";
import CharSearch from "../charSearch/CharSearch";

import decoration from '../../resources/img/spiderman.png';

const MainPage = () => {
   const [selectedChar, setChar] = useState(null);

   const onCharSelected = (id) => setChar(id);
   return (
      <>
         <ErrorBoundary> <RandomChar /></ErrorBoundary>
         <div className="char__content">
            <CharList onCharSelected={onCharSelected} />
            <div>
               <ErrorBoundary>
                  <CharInfo charId={selectedChar} />
               </ErrorBoundary>

               <ErrorBoundary>
                  <CharSearch />
               </ErrorBoundary></div>

         </div>
         <div className="box-decoration">
            <img className="bg-decoration" src={decoration} alt="vision" />
         </div>

      </>
   )
}

export default MainPage;