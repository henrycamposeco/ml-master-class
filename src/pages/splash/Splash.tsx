import { useAudio } from '../../hooks/useAudio';
import splashImage from '../../assets/images/ui/splash.png';
import './styles.css';
import type {FunctionComponent} from "preact";
import bgm from "../../assets/audio/bgm.mp3";
import startSound from "../../assets/audio/start.mp3";

interface SplashProps {
    onClick: () => void;
}

const Splash: FunctionComponent<SplashProps> = ({onClick}) => {
    const { play, stop, isLoaded } = useAudio(bgm, {
        loop: true,
        volume: 0.2
    });

    const { play: playStart } = useAudio(startSound, {
        loop: false,
        volume: 0.8
    });

    const handleClick = async () => {
        if (!isLoaded) {
            try {
                await play();
                return;
            } catch (error) {
                // Silent failure
            }
        } else {
            playStart().catch(error => {
                console.log('Failed to play playStart sound:', error);
            });
        }

        // next screen
        stop();
        onClick();
    };

    return (
        <div className="splash-container" onClick={handleClick}>
            <img src={splashImage} alt="Splash Screen" className="splash-image"/>
            <div className="press-start">
                {isLoaded ? 'PRESS START' : 'CLICK TO START AUDIO'}
            </div>
        </div>
    );
};

export default Splash;