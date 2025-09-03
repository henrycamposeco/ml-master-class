import './app.css'

import CardCollection from "./components/cards/CardCollection.tsx";
import {content} from "./pages/content.tsx";
import Splash from "./pages/splash/Splash.tsx";
import {useState} from "react";


export function App() {
    const [showCards, setShowCards] = useState(false);

    return (
        <>
            {!showCards && <Splash onClick={() => setShowCards(true)}/>}
            {showCards && (
                <>
                    <h1 style={{margin: '-1rem'}}>Machine Learning</h1>
                    <h3 style={{margin: '1rem'}}>Lvl 1</h3>
                    <CardCollection data={content}/>
                </>
            )}
        </>
    )
}