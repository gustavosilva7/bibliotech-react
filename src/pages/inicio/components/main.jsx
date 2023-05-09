import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
export default function Main() {
    return (
        <div className='mainInicio'>
            <section>
                <h2>Total de livros</h2>
                <p>0</p>
            </section>
            <section>
                <h2>Emprestimos</h2>
                <p>0</p>
            </section>
            <section>
                <h2>Pendentes</h2>
                <p>0</p>
            </section>
        </div>
    )
}