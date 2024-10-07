'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FAQItem.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type Props = {
    title: string,
    content: string
}
export const FAQItem = ({ title, content }: Props) => {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleClick = () => {
        setShowQuestion(!showQuestion);
    };

    return (
        <div className={`faq-item ${showQuestion && 'active'}`} onClick={handleClick}>
            <div className="question">
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="answer">
                <p>{content}</p>
            </div>
        </div>
    );
};