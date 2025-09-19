import type {FunctionComponent} from "preact";
import {useState, useCallback} from "preact/hooks";
import "./styles.css";
import RandomGif from "../giphy/RandomGif.tsx";
import type ISlide from "./Slide.d.tsx";

interface SlideProps {
    slides: Array<ISlide>;
}

const Slide: FunctionComponent<SlideProps> = ({slides}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [modalImage, setModalImage] = useState<string | null>(null);
    const totalPages = slides.length;

    const handleImageClick = useCallback((imageUrl: string) => {
        setModalImage(imageUrl);
    }, []);

    const closeModal = useCallback(() => {
        setModalImage(null);
    }, []);

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

                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {slides[currentPage].images?.map((image, index) => (
                        <a
                            key={index}
                            href={image.src}
                            style={{
                                cursor: 'pointer',
                                margin: '10px',
                                textDecoration: 'none',
                                color: '#320983',
                                display: 'inline-block'
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleImageClick(image.src);
                            }}
                        >
                            [{image.alt || 'Image'}]
                        </a>
                    ))}
                </div>
                {modalImage && (
                    <div className="modal-image" onClick={closeModal}>
                        <img
                            src={modalImage}
                            alt="Modal image"
                            className="modal-image-img"
                            onClick={closeModal}
                        />
                    </div>
                )}

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