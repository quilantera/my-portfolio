import './styles.scss'

import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'
export function About(){
    const linkphoto ="https://scontent.fppb2-1.fna.fbcdn.net/v/t1.6435-9/33207171_2220989121250351_8973884370246959104_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=NiQrI3qwJaUAX-Tkici&_nc_ht=scontent.fppb2-1.fna&oh=00_AT85x8HED8BtQudBwDGJjY75DxnXOCTdDJhlbxo9I0CwXg&oe=63769F04"
    return(
    <section id="about">
       <h5> Go to Know</h5><h2>About Me</h2>   
       <div className="container about-container">    
            <div className="about-me">  
                <div className="about-me-image">
                    <img src={linkphoto} alt="About Image"/>
                </div>
            </div>  

            <div className="about-content">   
                <div className="about-cards">

                    <article className="about-card">
                        <FiAward className='about-icon'/>
                        <h5>Experience</h5>
                        <small> initialing Working </small>
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
                <p> I´m Gustavo, Front-end Developer and currently graduating in Computer Science.</p>
                <a href="#contact" className="btn btn-primary">Let´s talk</a>
            </div>
        </div>
    </section>
    )
}