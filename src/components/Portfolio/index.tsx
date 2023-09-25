import './styles.scss';

import P1 from '../../assets/covidEmFoco.png';
import P2 from '../../assets/dashboardPPgSI.png';
import P3 from '../../assets/hypedContent.png';

import P4 from '../../assets/azevedoSeuimovel.png';
import P5 from '../../assets/telosClinica.png';
import P6 from '../../assets/blindStudy.png';

import P7 from '../../assets/newsletter.png';
import P8 from '../../assets/portgolio-soulcode.png';

export function Portfolio(){
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="portfolio-container">
            <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P4} alt="Azevedo seu imovel"/>
                    </div>
                    <h3>Azevedo Seu Imóvel</h3>
                    <div className="portfolio-cta">
                        <a href="https://www.azevedoseuimovel.com/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P5} alt="Telos Clinica multidiciplinar"/>
                    </div>
                    <h3>Telos clinica Multidiciplinar</h3>
                    <div className="portfolio-cta">
                        <a href="https://telos-clinica.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P6} alt="Blind Study"/>
                    </div>
                    <h3>Blind Study - TCC</h3>
                    <div className="portfolio-cta">
                        <a href="https://github.com/quilantera/blindStudy" className="btn" target="_blank">Github</a>
                        <a href="https://blind-study.vercel.app/materias/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P1} alt="Covid em Foco"/>
                    </div>
                    <h3>Covid Em Foco</h3>
                    <div className="portfolio-cta">
                        <a href="https://github.com/etakao/covid-em-foco-frontend/tree/quilante" className="btn" target="_blank">Github</a>
                        <a href="https://covid-em-foco.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P7} alt="NewsLetter"/>
                    </div>
                    <h3>Portal de noticias</h3>
                    <div className="portfolio-cta">
                        <a href="https://github.com/quilantera/newsletter" className="btn" target="_blank">Github</a>
                        <a href="https://quilantera.github.io/newsletter/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P2} alt="DashBoard PPgSI"/>
                    </div>
                    <h3> DashBoard PPgSI</h3>
                    <div className="portfolio-cta">
                        <a href="https://github.com/etakao/Projeto-ESI-Frontend" className="btn" target="_blank"> Github</a>
                        <a href="https://projetoes1.netlify.app/" className="btn btn-primary" target="_blank"> Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P8} alt="Portfólio SoulCode"/>
                    </div>
                    <h3> Portfólio SoulCode</h3>
                    <div className="portfolio-cta">
                        <a href="https://github.com/quilantera/projeto-css/" className="btn" target="_blank"> Github</a>
                        <a href="https://quilantera.github.io/projeto-css/" className="btn btn-primary" target="_blank"> Live Demo</a>
                    </div>
                </article>
                <article className="portfolio-item">
                    <div className="portfolio-item-image">
                        <img src={P3} alt="hyped Content Doc shoes"/>
                    </div>
                    <h3>HypedContent - Doc shoes</h3>
                    <div className="portfolio-cta">
                        <a href="https://github.com/quilantera/TrabalhoappWeb" className="btn" target="_blank">Github</a>
                    <a href="https://github.com/quilantera/TrabalhoappWeb" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>

    )
}