import { render } from 'preact'
import './index.css'
import {Router, Route, route} from 'preact-router'
import Splash from "./pages/splash/Splash.tsx";
import LevelSelector from "./pages/levels/levelSelector.tsx";
import Level0 from "./pages/levels/level0/level0.tsx";
import Finish from "./pages/finish/Finish.tsx";
import Level1 from "./pages/levels/level1/level1.tsx";

render(
    <Router>
        <Route path="/" component={() => <Splash onClick={() => route('/levelSelect')}/>}/>
        <Route path="/levelSelect" component={() => <LevelSelector/>}/>
        <Route path="/level1" component={() => <Level1/>}/>
        <Route path="/level0" component={() => <Level0/>}/>
        <Route path="/finish" component={() => <Finish/>}/>
    </Router>,
    document.getElementById('app')!
)
