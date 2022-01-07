import React from 'react';
import imageDataCertificate from "../images/FullStackDevCertificate.png";
import "./styles.css";
import { Link } from "react-router-dom";


export const MainScreen = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <picture>
                        <img src={imageDataCertificate} id="imageDataCertificate" alt="full-stack-web-dev-certificate-from-Michigan-State-University" />
                    </picture>
                    <div className="container" id="data-text">
                        <hr></hr>
                        <h6>Technologies Covered/Used: <br></br></h6>
                        <hr></hr>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQUERY</li>
                                    <li>Bootstrap</li>
                                    <li>SEO</li>
                                    <li>API's (Consuming)</li>
                                    <li>JSON</li>
                                    <li>AJAX</li>
                                    <li>Progressive Web Applications</li>
                                    <li>React.js</li>
                                    <li>Heroku</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>GitHub</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>Templating Engines</li>
                                    <li>Sessions</li>
                                    <li>Writing Tests</li>
                                    <li>Node.JS</li>
                                    <li>Express.js</li>
                                    <li>Creating APIs</li>
                                    <li>MVC</li>
                                    <li>User Authentication</li>
                                    <li>ORM (Object-relational mapping)</li>
                                    <li>Design Patterns</li>
                                </ul>
                            </div>
                            <div>
                                Language Certifications Pending: C#, Python(Currently using in school)
                                <hr></hr>
                                AAS Web Programming: <br></br> 2023
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                    {/* Thank you! Why am I saying thank you? You have taken time out of your busy schedule to have a look at my portfolio's home page. You could be reading anything in the world, yet, you've chosen to spend time looking through some of my material and I'm grateful. Please, if inspired by curiosity from any aspect of viewing my content, you can see more of my work via the github link on my contacts page. If you are looking for a direct (fast) response, the best place to reach me is linkedin. That link is also on my contact page. Good day to you and I hope that you find something that you like. */}
                </div>
                <div className="col">
                    <h1>Hello, I'm James</h1>
                    <div style={{ marginTop: "10%", marginBottom: "15%" }}>
                        <span>
                            <span style={{ marginRight: "5%" }} />I wear many hats in my everyday life. Whether its engineering a company's network, doing electrical
                            work for security systems, working wood
                            in my garage, learning and applying web development skills, or just being the
                            loving and caring father that I am everyday, I love what I do and I do it all with passion and
                            purpose. I had an ios application out in 2018, but
                            I didn't feel good about the project because I did not build the project myself and was not entirely
                            in control of the creative process. I love being creative and being able to express my creativity
                            even more. I am infatuated with the "click" moments that you get when things begin to
                            sink in and make sense. So naturally, I picked up every book that I could about coding and began to
                            read.
                            There was this idea that I could build my own applications and submit them for the world to see that
                            became
                            a source for my drive to learn more about coding. Then I realized that this is a skill that can be
                            passed along, and
                            from that, purpose was added to my drive to learn.
                        </span>
                        <br />
                        <span>
                            <span style={{ marginRight: "5%" }} />Development in general is more than a hobby or skill to me. It is a tool that can be used to change
                            the lives of any and everyone. I equate developing to having a super power. To be able to work with
                            people or companies to help them make their dreams or products come to life is a big deal to me.
                            Just as
                            someone took the time out to help me bring my application to life, which was my dream at that
                            moment, I
                            want to do the same and help people to build and create tools and applications that can fulfill
                            their
                            dreams and help make the world a better place. I'm excited to hear about new ideas and helping to
                            come
                            up with ways to bring them to life.
                        </span>
                    </div>
                    <Link to="/portfolio2022" className='btn btn-dark my-3'>See My Projects</Link>
                    {/* <Link ><button type="button" class="btn btn-primary btn-lg" id="big-btn">See My Projects</button></Link> */}
                </div>
            </div>
        </div>
    )
}
