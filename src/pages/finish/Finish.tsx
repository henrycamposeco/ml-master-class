import { useAudio } from '../../hooks/useAudio';
import './styles.css';
import type {FunctionComponent} from "preact";
import end from "../../assets/audio/gameover.mp3";

const Finish: FunctionComponent = () => {
    const { play, stop, isLoaded } = useAudio(end, {
        loop: true,
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
        }

        // next screen
        stop();
        window.location.href = '/levelSelect';
    };

    return (
        <div className="splash-container" onClick={handleClick}>
            <img width="80%" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2NwdXJ4eWlpNmdmbGx4NjI1dHpzZzZua3dudjd2cGR2cmE0ZHI5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JYpOTe5Lju43ROhwQV/giphy.gif" alt="Splash Screen" className="splash-image"/>
            <div className="farewell">
                {isLoaded ? '¡HASTA LA PRÓXIMA!' : ':)'}
            </div>
        </div>
    );
};

export default Finish;