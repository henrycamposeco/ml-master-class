import type {FunctionComponent} from 'preact';
import CardCollection from "../../../components/cards/CardCollection.tsx";
import {slidesContent} from "./slidesContent.tsx";
import '../../../app.css'

const Level3: FunctionComponent = () => {
    return (
        <>
            <a href="/levelSelect"><h1 style={{margin: '-1rem', color: 'white'}}>⬅ Lab: Lunar Lander</h1></a>
            <h2 style={{margin: '1rem'}}>Lvl 3</h2>
            <CardCollection data={slidesContent}/>
        </>
    );
};

export default Level3;
