import './rodape.css'

const Rodape = () => {
 
    return(
            <footer className='footer'>      
            <section>
            
            <ul>
                <li>
                <a  target={'_blank'} href='https://www.facebook.com/Vericodeit/'>
                <img src='/imagens/fb.png' alt='img fb'></img>
                </a>
                </li>
                <li>
                <a target={'_blank'}  href='https://twitter.com/VericodeIT?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
                <img src='/imagens/tw.png' alt='img tw'></img>
                </a>
                </li>
                <li>
                <a  target={'_blank'}  href='https://www.instagram.com/vericode.br/'>
                <img src='/imagens/ig.png' alt='img ig'></img>
                </a>
                </li>
            </ul>
                </section>
                <section>
                    <img src='/imagens/logo.png' alt='img fundo veri'></img>
                </section>
                <section>
                <a className='texto-footer' target={'_blank'} href='https://github.com/Mateusdcsouza23'>    
                <p>Desenvolvido por Mateus</p>
                </a>
                </section>
            </footer>
    )
}

export default Rodape