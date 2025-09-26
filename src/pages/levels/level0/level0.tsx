import type {FunctionComponent} from 'preact';
import CardCollection from "../../../components/cards/CardCollection.tsx";
import {slidesContent} from "./slidesContent.tsx";
import '../../../app.css'

const Level0: FunctionComponent = () => {
    return (
        <>
            <a href="/levelSelect"><h1 style={{margin: '-1rem', color: 'white'}}>⬅ Muy Pronto!</h1></a>
            <h2 style={{margin: '1rem'}}></h2>
            <CardCollection data={slidesContent}/>
        </>
    );
};

export default Level0;
