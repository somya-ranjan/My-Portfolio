import React, { useState } from 'react'
import "./Sass/Main.css"
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Tabs, Tab } from '@mui/material';

function AboutSection() {
    const [state, setstate] = useState(0)
    const theme = useTheme();

    const handelTabs = (e, val) => {
        console.log(val);
        setstate(val)
    }
    const handleChangeIndex = (index) => {
        setstate(index);
    };
    return (
        <div className="container-fluid aboutSection" id="about">
            <div className="row justify-content-around aboutSectionContent">
                <h1>About Me</h1>
                <div data-aos="slide-up" className="col-5">
                    <img src="media/about.png" alt="" className="img-fluid" />
                </div>
                <div data-aos="slide-up" className="col-8 col-md-5">
                    <Tabs value={state} onChange={handelTabs} centered className="tabs">
                        <Tab label="About" className="tab" />
                        <Tab label="Skils" className="tab" />
                        <Tab label="Contact" className="tab" />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={state} onChangeIndex={handleChangeIndex} className="tabContent">
                        <TabComp value={state} index={0}>
                            <div className="tabAboutContent">
                                <ul>
                                    <li style={{ colr: "red" }}>I’m somyaranjan frontend web developer, my ambition is become a fullstack web developer.</li>
                                    <li>Ability to create innovative, creative, & interactive web designs to boost customer engagement.</li>
                                    <li>Familiar with <b>html5 , css3 , javascript , react Js , jquery,</b> & other uiframeworks. Build reusable code for future use while optimizing web performance.</li>
                                </ul>
                            </div>
                        </TabComp>

                        <TabComp value={state} index={1}>
                            <div className="tabSkilContent">
                                <div className="html">
                                    <i class="fab fa-html5"></i>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">html5</div>
                                    </div>
                                </div>
                                <div className="css">
                                    <i class="fab fa-css3-alt"></i>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">css3</div>
                                    </div>
                                </div>
                                <div className="javaScript">
                                    <i class="fab fa-js-square"></i>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                                    </div>
                                </div>
                                <div className="bootStrtap">
                                    <i class="fab fa-bootstrap"></i>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">BootStrtap</div>
                                    </div>
                                </div>
                                <div className="jQuery">
                                    <img src="media\jquery.png" alt="" className="img-fluid" />
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">jQuery</div>
                                    </div>
                                </div>
                                <div className="sass">
                                    <i class="fab fa-sass"></i>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Sass</div>
                                    </div>
                                </div>
                                <div className="react">
                                    <i class="fab fa-react"></i>
                                    <div class="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">react</div>
                                    </div>
                                </div>
                            </div>
                        </TabComp>

                        <TabComp value={state} index={2}>
                            <div className="tabContactContent">
                                <h2> <i class="fas fa-phone-alt"></i> +91 7008865007</h2>

                                <h2> <i class="fas fa-envelope"></i> mr.somyars@gmail.com</h2>

                                <h2> <a href="https://github.com/somya-ranjan" target="_blank"> <i class="fab fa-github-square"></i> Somyaranjan Sethy </a></h2>

                                <h2> <a href="https://www.linkedin.com/in/somya-ranjan/" target="_blank"> <i class="fab fa-linkedin"></i> Somyaranjan Sethy </a></h2>

                                <h2> <a href="https://www.instagram.com/somyaranjansanu/" target="_blank"> <i class="fab fa-instagram"></i> somyaranjansanu </a></h2>
                            </div>
                        </TabComp>
                    </SwipeableViews>
                </div>
            </div>
        </div>
    )
}

function TabComp(props) {
    const { children, value, index } = props
    console.log(props);
    return (
        <div>
            {
                value === index && (
                    <>
                        {children}
                    </>
                )
            }
        </div>
    )
}

export default AboutSection
