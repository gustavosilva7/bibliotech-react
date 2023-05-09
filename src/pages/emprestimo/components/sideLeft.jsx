import React from "react";
import { ReactDOM } from "react";
import './sideLeft.css'
export default function Left() {
    return (
        <div className="sideLeft">
            <h2 className="titleEmpres">Emprestimo de livros</h2>
            <form className="formNewEmpres">
                <label htmlFor="livroEmpres">Nome do Livro</label>
                <input type="text" placeholder="Nome do Livro" id="livroEmpres" name="name-livro-empres"/>
                <div className="tombo-autor">
                    <div>
                        <label htmlFor="tomboEmpres">Tombo</label>
                        <input type="text" placeholder="Digite o tombo do livro" id="tomboEmpres" name="tombo-livro-empres"/>
                    </div>
                    <div>
                        <label htmlFor="autorEmpres">Autor</label>
                        <input type="text" placeholder="Digite o autor do livro" id="autorEmpres" name="autor-livro-empres"/>
                    </div>
                </div>
                <label htmlFor="alunoEmpres">Nome do Aluno</label>
                <input type="text" placeholder="Nome do Aluno" id="alunoEmpres" name="name-aluno-empres"/>
                <div className="serie-turma">
                    <div>
                        <label htmlFor="serieEmpres">Série</label>
                        <input type="text" placeholder="serie do aluno" id="serieEmpres" name="serie-aluno-empres"/>
                    </div>
                    <div>
                        <label htmlFor="turmaEmpres">Turma</label>
                        <input type="text" placeholder="turma do aluno" id="turmaEmpres" name="turma-aluno-empres"/>
                    </div>
                </div>

                <div className="divBtnEnviarEmpres">
                    <button type="submit" onClick={(event) => {
                        event.preventDefault()
                        alert(document.getElementById("livroEmpres").value)
                    }}
                    >Confirmar</button>
                </div>
            </form>
        </div>
    )
}