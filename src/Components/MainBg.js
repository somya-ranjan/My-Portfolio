import React from 'react'

import './Sass/Main.css'
import Typical from 'react-typical'

function MainBg() {
    return (
        <div className="container-fluid mainBgSection" id="home">
            <div className="row justify-content-evenly align-items-center mainBgContent">
                <div data-aos="slide-right"  className="col-10 textAnimation">
                    <h1>Hi...</h1>
                    <h2>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "I'm Somyaranjan",
                                2000,
                                "I'm A Frontend Developer",
                                2000
                            ]}
                        />
                    </h2>
                    <button> <a href="https://drive.google.com/file/d/184tdLCNzjzQo8rgDMw4dHUCRP081B0Vl/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a> </button>
                </div>
                <div data-aos="slide-left" className="col-6 mainBgImg">
                    <img src="media/my.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default MainBg
