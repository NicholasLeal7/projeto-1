import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFlag } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <footer className='footer-home'>
            <div id="footer_content">

                <div id="footer_contacts">
                    <h1>
                        <FontAwesomeIcon icon={faFlag} className='icon' />
                        Logo
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div id="footer_social_media">
                        <a href="#" className='footer-link' id='instagram'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className='footer-link' id='facebook'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className='footer-link' id='whatsapp'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>

                <ul className='footer-list'>
                    <li>
                        <h3>Outros Produtos</h3>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Tech</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Adventures</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Music</a>
                    </li>
                </ul>

                <ul className='footer-list'>
                    <li>
                        <h3>Legal</h3>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Termos de Uso</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>Termos de Privacidade</a>
                    </li>
                    <li>
                        <a href="#" className='footer-link'>CNPJ: 00.000.000/0000-00</a>
                    </li>
                </ul>

                <div id="footer_subscribe">
                    <h3>Fale Conosco</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusamus cupiditate quam provident eum laboriosam, sit.
                    </p>

                    <div id="input_group">
                        <input type="email" id='email' />
                        <button>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </div>
                </div>

            </div>

            <div id="footer_copyright">
                &#169;
                2024 todos os direitos reservados
            </div>
        </footer>
    );
};