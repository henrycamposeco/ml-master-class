import type {FunctionComponent} from "preact";
import "./style.css";
import hoverSound from "../../assets/audio/hover.mp3";
import {useAudio} from "../../hooks/useAudio.tsx";

const LevelSelector: FunctionComponent = () => {
    const {play} = useAudio(hoverSound || '', {loop: false, volume: 0.3});

    const handleMouseEnter = () => {
        if (hoverSound) {
            play().catch(error => {
                console.log('Failed to play hover sound:', error);
            });
        }
    };

    return (
        <div className="level-selector-container">
            <h1>Selección de Nivel</h1>
            <nav>
                <a href="/level1" className="level-link" onMouseEnter={handleMouseEnter}>1 - Teoría</a>
                <a href="/level2" className="level-link" onMouseEnter={handleMouseEnter}>2 - Modelo predictivo</a>
                <a href="/level3" className="level-link" onMouseEnter={handleMouseEnter}>3 - Naves Espaciales</a>
                <a href="/level0" className="level-link" onMouseEnter={handleMouseEnter}>4 - Walking Simulator</a>
                <a href="/level0" className="level-link" onMouseEnter={handleMouseEnter}>5 - Computer Vision</a>
                <a href="/level0" className="level-link" onMouseEnter={handleMouseEnter}>6 - Identifica Fraudes</a>
                <a href="/finish" className="level-link" onMouseEnter={handleMouseEnter}>Fin</a>
                <a href="/" className="level-link" onMouseEnter={handleMouseEnter}>{`<---`}</a>
            </nav>
        </div>
    );
};

export default LevelSelector;
