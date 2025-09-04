import type {FunctionComponent} from "preact";
import {useState} from "preact/hooks";
import "./styles.css";
import RandomGif from "../../components/giphy/RandomGif.tsx";

interface SlideProps {
    slides: Array<{
        title: string,
        items: string[],
        tag: string,
    }>;
}

const Slide: FunctionComponent<SlideProps> = ({slides}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = slides.length;

    return (
        <>
            <div className="random-gif-container bottom-right">
                <RandomGif size={900} tag={slides[currentPage].tag || 'pixelart'} updateIntervalSeconds={Math.floor(Math.random() * 5) + 6}/>
            </div>
            <div className="random-gif-container top-left">
                <RandomGif size={900} tag={slides[currentPage].tag || 'pixelart'} updateIntervalSeconds={Math.floor(Math.random() * 5) + 6}/>
            </div>
            <div className="slide-container">
                <h1 className="slide-title">
                    {slides[currentPage].title}
                </h1>
                <ul className="slide-list">
                    {slides[currentPage].items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <div className="navigation-container">
                    <div
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        className={`nav-button ${currentPage === 0 ? 'nav-button-disabled' : 'nav-button-active'}`}
                    >
                        &#8592;
                    </div>
                    <div className="pagination-counter">
                        {currentPage + 1} / {totalPages}
                    </div>
                    <div
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        className={`nav-button ${currentPage === totalPages - 1 ? 'nav-button-disabled' : 'nav-button-active'}`}
                    >
                        &#8594;
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide;