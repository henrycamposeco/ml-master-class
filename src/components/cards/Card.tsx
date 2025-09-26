import type {FunctionComponent} from "preact";
import frameImage from "../../assets/images/ui/cardFrame.png"
import "./style.css";
import {useAudio} from "../../hooks/useAudio.tsx";
import hoverSound from "../../assets/audio/hover.mp3"
import clickSound from "../../assets/audio/click.mp3"

interface DefaultCardProps {
    title: string;
    description: string;
    contentImage: string;
    onClick?: () => void;
}

const Card: FunctionComponent<DefaultCardProps> = ({title, description, contentImage, onClick}) => {
    const {play} = useAudio(hoverSound || '', {loop: false, volume: 0.3});
    const {play: playClickSound} = useAudio(clickSound || '', {loop: false, volume: 1});

    const handleMouseEnter = () => {
        if (hoverSound) {
            play().catch(error => {
                console.log('Failed to play hover sound:', error);
            });
        }
    };

    const handleClick = () => {
        playClickSound().catch(error => {
            console.log('Failed to play click sound:', error);
        });
        
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            className="card"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            <div className="card-image-container">
                <div className="card-image-wrapper">
                    <img src={contentImage} alt="Card content" className="card-content-image"/>
                    <img src={frameImage} alt="Card frame" className="card-frame-image"/>
                </div>
                <div className="card-text-overlay">
                    <h3 className="card-title">{title}</h3>
                </div>
                <div className="card-text-overlay">
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;