import { Nav } from "../component/Nav";

export const Projects = () =>{
    return(
        <>
            <div className="outerBack">
                <Nav></Nav>
                <div className="divider"></div>
                <section className="projects">
                    <div className="projectContainer">
                        <img src="" alt="meowpop"></img>
                        <h1 className="projectName"> Meowpop </h1>
                        <p className="projectDesc"> 
                            An eccomerce cat website where user can browse and purchase items. 
                            Users can also apply to become vendors and create product listings.
                        </p>
                        <div className="projectTools">
                            <ul className="projectTools">
                                <li> MongoDb </li> 
                                <li> Express.js </li>
                                <li> React </li>
                                <li> Node.js </li>
                                <li> Typescript </li>
                                <li> Amazon S3 </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <img src="" alt="BlogWog"></img>
                        <p className="projectDesc">
                            A blog site where users can browse various post. Registered
                            users can login to leave comments on post
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> MongoDb </li> 
                                <li> Express.js </li>
                                <li> React </li>
                                <li> Node.js </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <img src="" alt="cattgram"></img>
                        <p className="projectDesc">
                            Social media web app that focuses on cats. Users can view and post pictures
                            of their cats and add other users as friends.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> HTML </li> 
                                <li> CSS </li>
                                <li> React </li>
                                <li> Javascript </li> 
                                <li> Firebase </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <img src="" alt="mentalMe"></img>
                        <p className="projectDesc">
                            A mental wellness mobile app that focuses on journaling. Moobie, our
                            mascot, supports and guides users on their journaling journey.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> React Native </li> 
                                <li> Firebase </li>
                                <li> Expo </li>
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <img src="" alt="portfolio2"></img>
                        <p className="projectDesc">
                            My second portfolio website I made before this one. A website
                            within a website that showcases my skills and projects.
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> HTML </li> 
                                <li> CSS </li>
                                <li> React </li>
                                <li> Typescript </li> 
                            </ul>
                        </div>
                    </div>

                    <div className="projectContainer">
                        <img src="" alt="etchasketch"></img>
                        <p className="projectDesc">
                            A resizeable etch a sketch grid where users can draw with
                            the color of their choice
                        </p>
                        <div className="projectTools">
                            <ul>
                                <li> HTML </li> 
                                <li> CSS </li>
                                <li> Javascript </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
        </>
    )
}