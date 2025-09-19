import { useAudio } from '../../hooks/useAudio';
import './styles.css';
import type {FunctionComponent} from "preact";
import end from "../../assets/audio/bgm.mp3";

const Finish: FunctionComponent = () => {
    const { play, stop, isLoaded } = useAudio(end, {
        loop: true,
        volume: 1
    });


    const handleClick = async () => {
        if (!isLoaded) {
            try {
                await play();
                return;
            } catch (error) {
                // Silent failure
            }
        }

        // next screen
        stop();
        window.location.href = '/levelSelect';
    };

    return (
        <div className="splash-container" onClick={handleClick}>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRwajQ2MzFyZ2pzcnFqaDA3cWdrZ2xiMmZsYzZtM2Z3Y3M3dWVpZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pVGsAWjzvXcZW4ZBTE/giphy.gif" alt="Splash Screen" className="splash-image"/>
            <div className="farewell">
                {isLoaded ? '¡HASTA LA PRÓXIMA!' : '!!'}
            </div>
        </div>
    );
};

export default Finish;