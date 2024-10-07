'use client';

import { useState } from 'react';
import { Input } from '../ui/Input';
import './FormPortfolio.scss';
import { Textarea } from '../ui/Textarea';
import { SocialMediaItem } from '../ui/SocialMediaItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/Button';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const FormPortfolio = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [biography, setBiography] = useState('');

    const handleName = (value: string) => {
        setName(value);
    };

    const handleJob = (value: string) => {
        setJob(value);
    };

    const handleBiography = (value: string) => {
        setBiography(value);
    };

    return (
        <div className="form-portfolio">
            <div className="form">
                <div className="basic-information">
                    <label htmlFor="">
                        Nome
                        <Input value={name} placeholder='Digite seu nome' onChange={handleName} />
                    </label>
                    <label htmlFor="">
                        Profissão
                        <Input value={job} placeholder='Digite sua profissão' onChange={handleJob} />
                    </label>
                </div>
                <div className="basic-information">
                    <label htmlFor="">
                        Email
                        <Input value={name} placeholder='Digite seu email' onChange={handleName} />
                    </label>
                    <label htmlFor="">
                        Telefone
                        <Input value={job} placeholder='Digite seu telefone' onChange={handleJob} />
                    </label>
                </div>
                <div className="biography">
                    <label htmlFor="">
                        Biografia
                        <Textarea value={job} placeholder='Diga um pouco sobre você' onChange={handleBiography} />
                    </label>
                </div>
                <div className="social-media">
                    <SocialMediaItem label='Linkedin' icon={faLinkedin} />
                    <SocialMediaItem label='GitHub' icon={faGithub} />
                    <SocialMediaItem label='Instagram' icon={faInstagram} />
                    <SocialMediaItem label='Twiiter/X' icon={faXTwitter} />
                </div>
                <div className="pick-photo">
                    <FontAwesomeIcon icon={faCamera} />
                    Escolher uma foto de perfil
                </div>
            </div>

            <div className="preview">
                <h2>Pré-visualizador</h2>
                <div className="preview-box">
                    <div className="box">Visualição aqui</div>
                    <div className="change-theme">
                        <div className="color-dark">
                            <h3>Escuro</h3>
                            <div className="pallet">
                                <div className="top-left"></div>
                                <div className="bottom-right"></div>
                            </div>
                            <div className="radio"></div>
                        </div>
                        <div className="color-light">
                            <h3>Claro</h3>
                            <div className="pallet">
                                <div className="top-left"></div>
                                <div className="bottom-right"></div>
                            </div>
                            <div className="radio"></div>
                        </div>
                    </div>
                </div>
                <div className="btn-create">
                    <Button label='Criar Website' style={{ fontWeight: 'bold', height: '100%' }} />
                </div>
            </div>

        </div>
    );
};