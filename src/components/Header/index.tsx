import { CTA } from '../CTA';
import { HeaderSocials } from '../HeaderSocials';
import './styles.scss'

export function Header(){

    return(
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Gustavo Quilante </h1>
                <h5 className="text-light"> FullStack Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    );
}
