import React from "react";
import { ReactDOM } from "react";
import HeaderAcervo from "./components/acervoHeader";
import MainAcervo from "./components/acervomain";
import FooterAcervo from "./components/acervofooter";

import './acervo.css'

export default function Acervo() {
    return (
        <div className="Acervo">
            <HeaderAcervo />
            <MainAcervo />
            <FooterAcervo />
        </div>
    )
}