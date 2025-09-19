import type {FunctionComponent} from "preact";

import Card from "./Card.tsx";
import {useState} from "preact/hooks";
import Modal from "../overlay/Modal.tsx";
import type ISlide from "../slide/Slide.d.tsx";

const CardCollection: FunctionComponent<{
    data: Array<{
        title: string,
        description: string,
        contentImage: string,
        slides: Array<ISlide>;
    }>
}> = ({data}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<any>();
    const [modalTitle, setModalTitle] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;

    const totalPages = Math.ceil(data.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const visibleCards = data.slice(startIndex, startIndex + cardsPerPage);

    return (
        <>
            {showModal && <Modal title={modalTitle} slides={modalContent} onClose={() => setShowModal(false)}/>}
            <div className="card-collection">
                {visibleCards.map((card, index) => (
                    <Card
                        key={startIndex + index}
                        title={card.title}
                        description={card.description}
                        contentImage={card.contentImage}
                        onClick={() => {
                            setModalTitle(card.title);
                            setShowModal(true);
                            setModalContent(card.slides);
                        }}
                    />
                ))}
            </div>
            {data.length > 3 && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    <div
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        className="navigation-arrow"
                        style={{
                            cursor: currentPage === 0 ? 'default' : 'pointer',
                            opacity: currentPage === 0 ? 0.5 : 1,
                            fontSize: '3rem',
                            padding: '20px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        &#8592;
                    </div>
                    <div>
                        {currentPage + 1} / {totalPages}
                    </div>
                    <div
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        className="navigation-arrow"
                        style={{
                            cursor: currentPage === totalPages - 1 ? 'default' : 'pointer',
                            opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                            fontSize: '3rem',
                            padding: '20px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        &#8594;
                    </div>
                </div>
            )}
        </>
    );
};

export default CardCollection;