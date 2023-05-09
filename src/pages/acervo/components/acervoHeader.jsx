import React from "react";
import { ReactDOM } from "react";

import './acervoHeader.css'

export default function HeaderAcervo() {
    return (
        <div className="headerAcervo">
            <h2>Acervo</h2>
            <input type="text" placeholder="Digite aqui" id="searchAcervo"/>
        </div>
    )
}