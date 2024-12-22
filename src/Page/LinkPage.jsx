/* <--- FUNCTIONS REACT ---> */
import React, { useEffect } from 'react';

/* <---- CSS'S ----> */
import styles from './Styles/LinkPage.module.css'; // Importe os estilos principais
import responsivoStyles from './Styles/LinkPageResponsive.module.css'; // Importe os estilos responsivos

/* <---- AOS AANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css'; // Não se esqueça de importar o CSS

/* <---- ASSETS ----> */
import Foto from '../Assets/Foto.png'; /* Minha foto */
import ScrollDetail from '../Assets/ScrollDetail.svg'; /* Detail */
/* <---- FUNDOS DOS CARDS DOS LINKS ----> */
import Fundo1 from '../Assets/FUNDOS/image 15.png'; /* Fundo Section Portfolio*/
import Fundo2 from '../Assets/FUNDOS/image 17.png'; /* Fundo Section LinkedIn */
import Fundo3 from '../Assets/FUNDOS/image 3.png'; /* Fundo Section GitHub */
import Fundo4 from '../Assets/FUNDOS/image 18.png'; /* Fundo Section E-mail */
/* <---- ICONS REDES ----> */
import IconLinkedin from '../Assets/Icons/IconLink.png'; /* Icon LinkedIn*/
import IconInsta from '../Assets/Icons/IconInst.png'; /* Icon Instagram */
import IconGitHub from '../Assets/Icons/IconGit.png'; /* Icon GitHub */
/* <---- BACKGROUND ----> */
import Background from '../Assets/BackgroundVector.png'; /* Background Letra S */

function LinkPage() {

    useEffect(() => {
        /* Inica o AOS */
        AOS.init({
            duration: 2000, /* Tempo de duração da animação */
        });
    }, []);

    const meuEmail = 'emersonsantossales245@gmail.com'; /* Declara a função e chama o meu e-mail */

    return (
        <div className={`${styles.Home} ${responsivoStyles.Home}`} /* <--- Home ----> */>
            <img src={Background} className={styles.Background} />
            { /* <---- Container principal ----> */}
            <section className={`${styles.Container} ${responsivoStyles.Container}`}>
                { /* <---- Header ----> */}
                <header data-aos="fade-down-left">
                    <img src={Foto} />
                    <div className={`${styles.NameAndInfo} ${responsivoStyles.NameAndInfo}`}>
                        <h1>
                            Emerson Sales
                        </h1>
                        <h2>
                            Dev. Front-end Júnior
                        </h2>
                    </div>
                </header>
                <img src={ScrollDetail} className={`${styles.Detail} ${responsivoStyles.Detail}`} />
                { /* <---- Container dos links ----> */}
                <section className={`${styles.ContainerLinks} ${responsivoStyles.ContainerLinks}`} data-aos="fade-up">
                    { /* <---- Section do meu portfólio ----> */}
                    <a href="https://emersonsalesdev.vercel.app" target="_blank">
                        <section className={`${styles.MeuPortfolio} ${responsivoStyles.MeuPortfolio}`} data-aos="fade-up-right">
                            <img src={Fundo1} />
                            <div className={`${styles.ContainerTexts} ${responsivoStyles.ContainerTexts}`}>
                                <h1>
                                    Meu Portfólio
                                </h1>
                                <h2>
                                    Conheça os projetos que desenvolvi e saiba mais sobre mim.
                                </h2>
                            </div>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.10381 1.51218C4.86941 1.27778 4.8695 0.897729 5.10401 0.663447L5.34392 0.42376C5.57824 0.189663 5.95793 0.189719 6.19217 0.423887L11.6984 5.92816C11.794 6.02315 11.8698 6.13611 11.9216 6.26053C11.9733 6.38496 12 6.51839 12 6.65315C12 6.78792 11.9733 6.92135 11.9216 7.04577C11.8698 7.17019 11.794 7.28315 11.6984 7.37814L6.19237 12.8851C5.95807 13.1194 5.57814 13.1194 5.34381 12.8851L5.10459 12.6459C4.87029 12.4116 4.87028 12.0317 5.10455 11.7974L9.82214 7.07896C10.0564 6.84463 10.0564 6.46477 9.8221 6.23047L5.10381 1.51218Z" fill="url(#paint0_linear_831_1290)" />
                                <path d="M0.424464 1.51219C0.190072 1.2778 0.190161 0.897744 0.424664 0.663462L0.664577 0.423775C0.898895 0.189678 1.27858 0.189734 1.51283 0.423902L7.01901 5.92818C7.11461 6.02317 7.19047 6.13612 7.24224 6.26055C7.29401 6.38497 7.32066 6.5184 7.32066 6.65317C7.32066 6.78793 7.29401 6.92136 7.24224 7.04579C7.19047 7.17021 7.11461 7.28317 7.01901 7.37816L1.51303 12.8851C1.27872 13.1194 0.898796 13.1195 0.664467 12.8851L0.425251 12.6459C0.190951 12.4116 0.190934 12.0317 0.425212 11.7974L5.1428 7.07897C5.37707 6.84465 5.37706 6.46478 5.14276 6.23048L0.424464 1.51219Z" fill="url(#paint1_linear_831_1290)" />
                                <defs>
                                    <linearGradient id="paint0_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </section>
                    </a>
                    { /* <---- Section do meu linkedin ---->  */}
                    <a href="https://www.linkedin.com/in/emerson-sales-9a5a49277/" target="_blank">
                        <section className={`${styles.LinkedIn} ${responsivoStyles.LinkedIn}`} data-aos="fade-up-left">
                            <img src={Fundo2} />
                            <div className={`${styles.ContainerTexts} ${responsivoStyles.ContainerTexts}`}>
                                <h1>
                                    LinkedIn
                                </h1>
                                <h2>
                                    Conheça meu perfil no LinkedIn.
                                </h2>
                            </div>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.10381 1.51218C4.86941 1.27778 4.8695 0.897729 5.10401 0.663447L5.34392 0.42376C5.57824 0.189663 5.95793 0.189719 6.19217 0.423887L11.6984 5.92816C11.794 6.02315 11.8698 6.13611 11.9216 6.26053C11.9733 6.38496 12 6.51839 12 6.65315C12 6.78792 11.9733 6.92135 11.9216 7.04577C11.8698 7.17019 11.794 7.28315 11.6984 7.37814L6.19237 12.8851C5.95807 13.1194 5.57814 13.1194 5.34381 12.8851L5.10459 12.6459C4.87029 12.4116 4.87028 12.0317 5.10455 11.7974L9.82214 7.07896C10.0564 6.84463 10.0564 6.46477 9.8221 6.23047L5.10381 1.51218Z" fill="url(#paint0_linear_831_1290)" />
                                <path d="M0.424464 1.51219C0.190072 1.2778 0.190161 0.897744 0.424664 0.663462L0.664577 0.423775C0.898895 0.189678 1.27858 0.189734 1.51283 0.423902L7.01901 5.92818C7.11461 6.02317 7.19047 6.13612 7.24224 6.26055C7.29401 6.38497 7.32066 6.5184 7.32066 6.65317C7.32066 6.78793 7.29401 6.92136 7.24224 7.04579C7.19047 7.17021 7.11461 7.28317 7.01901 7.37816L1.51303 12.8851C1.27872 13.1194 0.898796 13.1195 0.664467 12.8851L0.425251 12.6459C0.190951 12.4116 0.190934 12.0317 0.425212 11.7974L5.1428 7.07897C5.37707 6.84465 5.37706 6.46478 5.14276 6.23048L0.424464 1.51219Z" fill="url(#paint1_linear_831_1290)" />
                                <defs>
                                    <linearGradient id="paint0_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </section>
                    </a>
                    { /* <---- Section do meu github ---->  */}
                    <a href="https://github.com/emersonslls?tab=repositories" target="_blank">
                        <section className={`${styles.Github} ${responsivoStyles.Github}`} data-aos="fade-up-right">
                            <img src={Fundo3} />
                            <div className={`${styles.ContainerTexts} ${responsivoStyles.ContainerTexts}`}>
                                <h1>
                                    GitHub
                                </h1>
                                <h2>
                                    Confira os projetos desenvolvidos por mim.
                                </h2>
                            </div>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.10381 1.51218C4.86941 1.27778 4.8695 0.897729 5.10401 0.663447L5.34392 0.42376C5.57824 0.189663 5.95793 0.189719 6.19217 0.423887L11.6984 5.92816C11.794 6.02315 11.8698 6.13611 11.9216 6.26053C11.9733 6.38496 12 6.51839 12 6.65315C12 6.78792 11.9733 6.92135 11.9216 7.04577C11.8698 7.17019 11.794 7.28315 11.6984 7.37814L6.19237 12.8851C5.95807 13.1194 5.57814 13.1194 5.34381 12.8851L5.10459 12.6459C4.87029 12.4116 4.87028 12.0317 5.10455 11.7974L9.82214 7.07896C10.0564 6.84463 10.0564 6.46477 9.8221 6.23047L5.10381 1.51218Z" fill="url(#paint0_linear_831_1290)" />
                                <path d="M0.424464 1.51219C0.190072 1.2778 0.190161 0.897744 0.424664 0.663462L0.664577 0.423775C0.898895 0.189678 1.27858 0.189734 1.51283 0.423902L7.01901 5.92818C7.11461 6.02317 7.19047 6.13612 7.24224 6.26055C7.29401 6.38497 7.32066 6.5184 7.32066 6.65317C7.32066 6.78793 7.29401 6.92136 7.24224 7.04579C7.19047 7.17021 7.11461 7.28317 7.01901 7.37816L1.51303 12.8851C1.27872 13.1194 0.898796 13.1195 0.664467 12.8851L0.425251 12.6459C0.190951 12.4116 0.190934 12.0317 0.425212 11.7974L5.1428 7.07897C5.37707 6.84465 5.37706 6.46478 5.14276 6.23048L0.424464 1.51219Z" fill="url(#paint1_linear_831_1290)" />
                                <defs>
                                    <linearGradient id="paint0_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </section>
                    </a>
                    { /* <---- Section do meu email ---->  */}
                    <a href={`mailto:${meuEmail}`} target="_blank">
                        <section className={`${styles.Email} ${responsivoStyles.Email}`} data-aos="fade-up-left">
                            <img src={Fundo4} />
                            <div className={`${styles.ContainerTexts} ${responsivoStyles.ContainerTexts}`}>
                                <h1>
                                    E-mail
                                </h1>
                                <h2>
                                    Entre em contato pelo e-mail caso desejar.
                                </h2>
                            </div>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.10381 1.51218C4.86941 1.27778 4.8695 0.897729 5.10401 0.663447L5.34392 0.42376C5.57824 0.189663 5.95793 0.189719 6.19217 0.423887L11.6984 5.92816C11.794 6.02315 11.8698 6.13611 11.9216 6.26053C11.9733 6.38496 12 6.51839 12 6.65315C12 6.78792 11.9733 6.92135 11.9216 7.04577C11.8698 7.17019 11.794 7.28315 11.6984 7.37814L6.19237 12.8851C5.95807 13.1194 5.57814 13.1194 5.34381 12.8851L5.10459 12.6459C4.87029 12.4116 4.87028 12.0317 5.10455 11.7974L9.82214 7.07896C10.0564 6.84463 10.0564 6.46477 9.8221 6.23047L5.10381 1.51218Z" fill="url(#paint0_linear_831_1290)" />
                                <path d="M0.424464 1.51219C0.190072 1.2778 0.190161 0.897744 0.424664 0.663462L0.664577 0.423775C0.898895 0.189678 1.27858 0.189734 1.51283 0.423902L7.01901 5.92818C7.11461 6.02317 7.19047 6.13612 7.24224 6.26055C7.29401 6.38497 7.32066 6.5184 7.32066 6.65317C7.32066 6.78793 7.29401 6.92136 7.24224 7.04579C7.19047 7.17021 7.11461 7.28317 7.01901 7.37816L1.51303 12.8851C1.27872 13.1194 0.898796 13.1195 0.664467 12.8851L0.425251 12.6459C0.190951 12.4116 0.190934 12.0317 0.425212 11.7974L5.1428 7.07897C5.37707 6.84465 5.37706 6.46478 5.14276 6.23048L0.424464 1.51219Z" fill="url(#paint1_linear_831_1290)" />
                                <defs>
                                    <linearGradient id="paint0_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_831_1290" x1="14.038" y1="6.64958" x2="2.2781" y2="6.64958" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3772FF" />
                                        <stop offset="1" stop-color="#066FD5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </section>
                    </a>
                </section>
                { /* <---- Links sociais ----> */}
                <div className={`${styles.LinkSociais} ${responsivoStyles.LinkSociais}`} data-aos="fade-up">
                    <h1>
                        Link Sociais
                    </h1>
                    <div className={`${styles.RedesIcons} ${responsivoStyles.RedesIcons}`} data-aos="fade-up">
                        <a href="https://www.linkedin.com/in/emerson-sales-9a5a49277/" target="_blank">
                            <img src={IconLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/_sxlles/" target="_blank">
                            <img src={IconInsta} />
                        </a>
                        <a href="https://github.com/emersonslls?tab=repositories" target="_blank">
                            <img src={IconGitHub} />
                        </a>
                    </div>
                </div>
                { /* <---- Footer ----> */}
                <footer>
                    <h1>
                        Feito por <span>&nbsp;@_sxlles</span>
                    </h1>
                </footer>
            </section>
        </div>
    );
};


export default LinkPage;