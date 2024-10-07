import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <header>
            <div className="left-side">
                <a href="" className='logo'>
                    <FontAwesomeIcon icon={faFlag} className='icon' />
                    Logo
                </a>
                <nav>
                    <a href="#create">Criar</a>
                    <a href="#works">Como Funciona?</a>
                    <a href="#faq">FAQ</a>
                </nav>
            </div>
        </header>
    );
};