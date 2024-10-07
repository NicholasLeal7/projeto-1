import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SectionContact.scss';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { user } from '@/data/user';
import { Contact } from '../ui/Contact';

export const SectionContact = () => {
    return (
        <section className='section-contact' id="contact_portfolio">
            <h2>Meus Contatos</h2>

            <div className="contacts">
                <Contact
                    type="Telefone"
                    icon={faPhone}
                    value={user.contact.telephoneNumber ?? ''}
                />
                <Contact
                    type="Celular"
                    icon={faPhone}
                    value={user.contact.phoneNumber}
                />
                <Contact
                    type="Email"
                    icon={faEnvelope}
                    value={user.contact.email}
                />
            </div>


        </section>
    );
};