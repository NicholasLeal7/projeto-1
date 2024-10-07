import { Button } from '../ui/Button';
import { FormArea } from './FormArea';
import './SectionHome.scss';

export const SectionHome = () => {
    return (
        <section className='section-home' id='create'>
            <div className="text-presentation">
                <h1>Profissionalize seu perfil</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, sit placeat laboriosam adipisci, fugit eveniet vitae voluptates tempora rem magni corporis culpa suscipit? Sint modi facilis quae, iste adipisci reiciendis!
                </p>
                <div className="btn-area">
                    <Button label='Criar Agora' />

                </div>
            </div>

            <FormArea />
        </section>
    );
};