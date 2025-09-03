import splashImage from '../../images/ui/splash.png';
import './styles.css';
import type {FunctionComponent} from "preact";

interface SplashProps {
    onClick: () => void;
}

const Splash: FunctionComponent<SplashProps> = ({onClick}) => {
    return (
        <div className="splash-container" onClick={onClick}>
            <img src={splashImage} alt="Splash Screen" className="splash-image"/>
            <div className="press-start">PRESS START</div>
        </div>
    );
};

export default Splash;