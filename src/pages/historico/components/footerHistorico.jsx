import React from 'react'
import ReactDOM from 'react-dom/client'

import './footer.css'

export default function Footer() {
    return (
        <div className='listHistorico'>
            <section className='livro'>
                <div className='filter'></div>
                <div className='livroUnico'>
                    <p>Nome do livro</p>
                    <p>Tombo do livro</p>
                    <p>Nome do aluno</p>
                    <p>Serie do aluno</p>
                    <p>Turma do aluno</p>
                </div>
                <button className='btnConfirmDevolucao'>
                    <ion-icon name="checkmark-done-outline"></ion-icon>
                </button>
            </section>
        </div>
    )
}