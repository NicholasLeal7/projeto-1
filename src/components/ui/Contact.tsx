import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    type: 'Telefone' | 'Celular' | 'Email',
    icon: IconDefinition,
    value: string
}
export const Contact = ({ type, icon, value }: Props) => {
    return (
        <div className="contact-item">
            <div className="type">
                <div className="icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                {type}
            </div>
            <div className="info">
                {value}
            </div>
        </div>
    );
};