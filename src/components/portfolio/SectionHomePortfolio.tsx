import Link from 'next/link';
import './SectionHomePortfolio.scss';
import { user } from '@/data/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const SectionHomePortfolio = () => {
    return (
        <section className="section-home-portfolio">
            <div className="portfolio-image">
                <img src={user.profilePic} alt={user.name} />
            </div>
            <div className="presentation">
                <h1>Hi, it's <span className='emphasis-word'>{user.name}</span></h1>
                <h3>I'm a <span className="emphasis-word">{user.profession}</span></h3>
                <p>{user.biography}</p>
                <div className="portfolio-social-media">
                    <Link href={user.socialMedia?.linkedin ?? '#'} className='portfolio-social-media-item'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link href={user.socialMedia?.github ?? '#'} className='portfolio-social-media-item'>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link href={user.socialMedia?.twitter ?? '#'} className='portfolio-social-media-item'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                    <Link href={user.socialMedia?.instagram ?? '#'} className='portfolio-social-media-item'>
                        <FontAwesomeIcon icon={faInstagram} color='red' />
                    </Link>
                </div>
                <div className="portfolio-btn-area">
                    <div className="btn-portfolio">Fale Comigo</div>
                </div>
            </div>
        </section>
    );
};