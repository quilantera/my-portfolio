import './styles.scss';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

export function HeaderSocials(){
    return(
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/gustavo-quilante-azevedo-328552239" target="_blank">
                <BsLinkedin/>
            </a>
            <a href="https://github.com/quilantera" target="_blank">
                <FaGithub/>
            </a>
        </div>
    )
}
