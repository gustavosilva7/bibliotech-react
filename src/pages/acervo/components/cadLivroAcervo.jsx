import './cadLivroAcervo.css'

export default function ModalContent({ onClose }) {
    return (
        <dialog className="backDropModal">
            <div className='modal'>

                <div className='headerModalAcervo'>
                    <h2>Cadastrar Livro</h2>
                    <button onClick={onClose} id='closeModalAcervo'>X</button>
                </div>
                <form action="">
                    <div class="allDadosCadLivro">
                        <div class="dadosCadLivro">
                            <div>
                                <label for="">Nome do Livro</label>
                                <input type="text"/>
                            </div>
                            <div>
                                <label for="">Volume</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div class="dadosCadLivro">
                            <div>
                                <label for="">Tombo</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label for="">Edição</label>
                                <input type="text" />
                            </div>
                        </div><div class="dadosCadLivro">
                            <div>
                                <label for="">Autor</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label for="">Local</label>
                                <input type="text" />
                            </div>
                        </div><div class="dadosCadLivro">
                            <div>
                                <label for="">Data de Lançamento</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label for="">Editora</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="divInputCadLivro">
                        <button id="btnConfirmarCadLivro">Cadastrar</button>
                    </div>
                </form>

            </div>
        </dialog>
    );
}