import React from "react";
import { createPortal } from 'react-dom';
import { ReactDOM } from "react";

import './acervofooter.css'
import ModalCadLivro from "./criarModalAcervo";

export default function FooterAcervo() {
    return (
        <div className="footerAcervo">
            <button className="btnFooterAcervo">Baixar Acervo</button>
            <ModalCadLivro />            
        </div>
    )
}