import './styles.scss'
import ProfileImage  from '../../assets/me.jpg';
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'
export function About(){
   
    return(
    <section id="about">
       <h5> Get to Know</h5><h2>About Me</h2>   
       <div className="container about-container">    
            <div className="about-me">  
                <div className="about-me-image">
                    <img src={ProfileImage} alt="About Image"/>
                </div>
            </div>  

            <div className="about-content">   
                <div className="about-cards">

                    <article className="about-card">
                        <FiAward className='about-icon'/>
                        <h5>Experience</h5>
                        <small> +/- 3 months with </small>
                    </article>

                    <article className="about-card">
                        <FiUsers className='about-icon'/>
                        <h5>Clients</h5>
                        <small> Working </small>
                    </article>

                    <article className="about-card">
                        <VscFolderLibrary className='about-icon'/>
                        <h5>Projects</h5>
                        <small> Working for</small>
                    </article>
                    
                </div>
                <p> I´m Gustavo, Front-end Developer and currently graduating at Computer Science.</p>
                <a href="#contact" className="btn btn-primary">Let´s talk</a>
            </div>
        </div>
    </section>
    )
}