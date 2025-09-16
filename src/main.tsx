import { render } from 'preact'
import './index.css'
import {Router, Route, route} from 'preact-router'
import Splash from "./pages/splash/Splash.tsx";
import LevelSelector from "./pages/levels/levelSelector.tsx";
import Level1 from "./pages/levels/level1/level1.tsx";
import Level2 from "./pages/levels/level2/level2.tsx";

render(
    <Router>
        <Route path="/" component={() => <Splash onClick={() => route('/levelSelect')}/>}/>
        <Route path="/levelSelect" component={() => <LevelSelector/>}/>
        <Route path="/level1" component={() => <Level1/>}/>
        <Route path="/level2" component={() => <Level2/>}/>
    </Router>,
    document.getElementById('app')!
)
