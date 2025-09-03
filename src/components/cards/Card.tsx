import type {FunctionComponent} from "preact";
import frameImage from "../../images/ui/cardFrame.png"
import "./style.css";



interface DefaultCardProps {
    title: string;
    description: string;
    contentImage: string;
    onClick?: () => void;
}

const Card: FunctionComponent<DefaultCardProps> = ({title, description, contentImage, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
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