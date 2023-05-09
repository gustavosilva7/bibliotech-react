import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../inicio/inicio'
import Inicio from '../inicio/inicio'
import Historico from '../historico/historico'
import Emprestimo from '../emprestimo/emprestimo'
import Acervo from '../acervo/acervo'

import '../conteudo/content.css'

export default function Content() {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleClick = (mainContent) => {
        setActiveDiv(mainContent);
    }
    return (
        <div className='container'>
            <aside className='aside'>
                <img src="../../../src/assets/logo.png" alt="logo" id='logo'/>
                <img src="../../../src/assets/user.png" alt="userFoto" id='user'/>
                <h1>Nome do usuário</h1>

                <div className='btnMainContent'>
                    <button onClick={() => handleClick(1)}>
                        <img src="../../../src/assets/inicio.png" className='imgInicio' />
                        <p>Inicio</p>
                    </button>
                    <button onClick={() => handleClick(2)}>
                        <img src="../../../src/assets/historico.png" className='imgInicio' />
                        <p>Histórico</p>
                    </button>
                    <button onClick={() => handleClick(3)}>
                        <img src="../../../src/assets/emprestimo.png" className='imgInicio' />
                        <p>Empréstimo</p>
                    </button>
                    <button onClick={() => handleClick(4)}>
                        <img src="../../../src/assets/acervo.png" className='imgInicio' />
                        <p>Acervo</p>
                    </button>
                </div>
            </aside>
            <main id='main'>
                {activeDiv === 1 && <Inicio /> }
                {activeDiv === 2 && <Historico />}
                {activeDiv === 3 && <Emprestimo />}
                {activeDiv === 4 && <Acervo />}
            </main>
        </div>
    )
}