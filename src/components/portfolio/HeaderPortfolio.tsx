import { faBars } from '@fortawesome/free-solid-svg-icons';
import './HeaderPortfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { user } from '@/data/user';

export const HeaderPortfolio = () => {
    return (
        <header className='header-portfolio'>
            <h2 className="title">{user.name}</h2>

            <nav>
                <a href="#home_portfolio" className='active'>Início</a>
                <a href="#education_and_experience_portfolio">Formação e Experiência</a>
                <a href="#contact_portfolio">Contato</a>
            </nav>

            <div className="bar-menu">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};