import type {FunctionComponent} from 'preact';
import CardCollection from "../../../components/cards/CardCollection.tsx";
import {slidesContent} from "./slidesContent.tsx";
import '../../../app.css'

const Level1: FunctionComponent = () => {
    return (
        <>
            <a href="/levelSelect"><h1 style={{margin: '-1rem', color: 'white'}}>Machine Learning</h1></a>
            <h2 style={{margin: '1rem'}}>Lvl 1</h2>
            <CardCollection data={slidesContent}/>
        </>
    );
};

export default Level1;
