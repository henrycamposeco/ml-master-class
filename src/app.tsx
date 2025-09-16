import './app.css'

// import CardCollection from "./components/cards/CardCollection.tsx";
// import {content} from "./pages/content.tsx";
import Splash from "./pages/splash/Splash.tsx";
import {useState} from "react";
import LevelSelector from "./pages/levels/levelSelector.tsx";


export function App() {
    const [showCards, setShowCards] = useState(false);

    return (
        <>
            {!showCards && <Splash onClick={() => setShowCards(true)}/>}
            {showCards && (
                <>
                    <LevelSelector  />
                </>
            )}
        </>
    )
}