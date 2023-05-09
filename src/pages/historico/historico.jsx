/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/headerHistorico'
import Main from './components/mainHistorico'
import Footer from './components/footerHistorico'

import './historico.css'
export default function Historico() {
    return (
        <div className='Historico'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}