'use client';

import { useState } from 'react';
import './FormArea.scss';
import { FormPortfolio } from './FormPortfolio';

export const FormArea = () => {
    const [plan, setPlan] = useState('portfolio');

    const switchPlan = (plan: string) => {
        setPlan(plan)
    };

    return (
        <div className="form-area">
            <div className="switch-plan">
                <div className={`portfolio ${plan === 'portfolio' ? 'active' : ''}`} onClick={() => switchPlan('portfolio')}>Pra sempre, portfólio online - R$ 39,99</div>
                <div className={`visit-card ${plan === 'visit-card' ? 'active' : ''}`} onClick={() => switchPlan('visit-card')}>Pra sempre, cartão de visita - R$ 19,99</div>
            </div>

            {plan === 'portfolio' &&
                <FormPortfolio />}
        </div>
    );
};