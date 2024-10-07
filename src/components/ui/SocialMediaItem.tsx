'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMediaItem.scss';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Input } from './Input';

type Props = {
    label: string,
    icon: IconDefinition
}
export const SocialMediaItem = ({ label, icon }: Props) => {
    return (
        <div className="social-media-item">
            <div className="item">
                <div className="checkbox"></div>
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
            </div>
            <Input value='' placeholder='Digite o link' onChange={() => null} />
        </div>
    );
};