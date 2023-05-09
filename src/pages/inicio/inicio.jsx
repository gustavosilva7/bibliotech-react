import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './inicio.css'
export default function Inicio() {
    return (
        <div className='Inicio'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}