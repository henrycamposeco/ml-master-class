import {useAudio} from '../../hooks/useAudio';
import './styles.css';
import type {FunctionComponent} from "preact";
import bgm from "../../assets/audio/bgm.mp3";
import startSound from "../../assets/audio/start.mp3";

interface SplashProps {
    onClick: () => void;
}

const Splash: FunctionComponent<SplashProps> = ({onClick}) => {
    const {play, stop, isLoaded} = useAudio(bgm, {
        loop: true,
        volume: 0.3
    });

    const {play: playStart} = useAudio(startSound, {
        loop: false,
        volume: 0.3
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
            <div className="splash-content">
                <h1 className="splash-title">Machine Learning</h1>
                <h2 className="splash-subtitle">
                    Master Class
                </h2>
                <div className="press-start">
                    {isLoaded ? 'COMENZAMOS PRONTO!' : '¡CLICK PARA COMENZAR!'}
                </div>
            </div>
            <img
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWJxd3JzdzQzcjN4MmF0aHBzbnE4cXNnMWV0dHhjbmVnZjQ5eGFibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jslf5xnqvAxzQbES1B/giphy.gif"
                alt="Splash Screen" className="splash-image"/>
        </div>
    );
};

export default Splash;