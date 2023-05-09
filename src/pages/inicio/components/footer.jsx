import React from 'react'
import ReactDOM from 'react-dom/client'
import './footer.css'
export default function Footer() {
    function add() {
        alert("clique")
    }
    return (
        <div className='footerMain'>
            <section className='bloco'>
                <div>
                    <input type="text" />
                    <button onClick={add}>+</button>
                </div>
                <ul>
                    
                </ul>
            </section>
        </div>
    )
}