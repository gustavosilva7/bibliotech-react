import React from 'react'
import ReactDOM from 'react-dom/client'
import './header.css'

export default function Header(){
    return (
        <div className='headerHistorico'>
            <h2>Histórico</h2>
            <input type="text"  placeholder='Digite aqui' id='searchHistori'/>
        </div>
    )
}