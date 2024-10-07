import { Button } from '../ui/Button';
import './SectionWorks.scss';

export const SectionWorks = () => {
    return (
        <section className="section-works" id="works">
            <div className="how-it-works">

                <div className="features">
                    <span>FEATURES</span>
                    <h2>Como Funciona?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur cupiditate dolore dignissimos nostrum omnis, itaque fuga alias iusto magni! Aspernatur consequatur doloribus reprehenderit laborum quaerat nostrum velit corrupti commodi.</p>
                    <Button label='Começar' style={{ height: '3rem' }} />
                </div>

                <div className="tutorial-boxes">
                    <div className="tutorial-box">
                        <div className="step-number">1</div>
                        <h3>Preencha os dados</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="tutorial-box">
                        <div className="step-number">2</div>
                        <h3>Preencha os dados</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="tutorial-box">
                        <div className="step-number">3</div>
                        <h3>Preencha os dados</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="tutorial-box">
                        <div className="step-number">4</div>
                        <h3>Preencha os dados</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};