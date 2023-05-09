import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './cadLivroAcervo';

export default function ModalCadLivro() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} className="btnFooterAcervo">
                Cadastrar Livro
            </button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}
