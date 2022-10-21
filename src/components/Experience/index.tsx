import './styles.scss'
import {HiCheckBadge} from 'react-icons/hi2';
export function Experience(){
    return(
    
    <section id="experience">
        <h5>What Skills I Have </h5>
        <h2>My Experience </h2>
        <div className="container experience-container">
            <div className="experience-frontend">
                <h3>Frontend Development </h3>
                <div className="experience-content">

                    <article className="experience-details">
                        
                        <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            <h4>HTML </h4>
                            <small className="text-light">Experienced </small>
                        </div>
                    </article>

                    <article className="experience-details">
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            
                            <h4>CSS </h4>
                        <small className="text-light">Intermediary </small>
                        </div>
                    </article>
                    
                    <article className="experience-details">
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            
                            <h4>JavaScript</h4>
                            <small className="text-light">Intermediary</small>
                        </div>
                    </article>
                    
                    <article className="experience-details">    
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            
                            <h4>React js </h4>
                            <small className="text-light">Intermediary</small>
                        </div>
                    </article>
                    
                    <article className="experience-details">
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            
                            <h4>Sass</h4>
                            <small className="text-light">Intermediary</small>
                        </div>
                    </article>

                </div>
            </div>
            <div className="experience-backend">
                <h3>Backend Development </h3>
                <div className="experience-content">
                    <article className="experience-details">
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            <h4>Nodejs</h4>
                            <small className="text-light">Basic</small>
                        </div>
                    </article>

                    <article className="experience-details">  
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            <h4>Express</h4>
                            <small className="text-light">Basic </small>
                        </div>
                    </article>

                    <article className="experience-details"> 
                    <HiCheckBadge className="experience-details-icon"/>  
                        <div>
                            <h4>MongoDB </h4>
                        <small className="text-light">Basic </small>
                        </div>
                    </article>

                    <article className="experience-details">  
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            <h4>Prisma</h4>
                            <small className="text-light">Basic</small>
                        </div>
                    </article>

                    <article className="experience-details">
                    <HiCheckBadge className="experience-details-icon"/>
                        <div>
                            <h4>MySQL</h4>
                            <small className="text-light">Basic </small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    )
}