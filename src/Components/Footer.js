import React from 'react'

function Footer() {
    return (
        <div className="container-fluid footerSection">
            <div className="row justify-content-between align-items-center footerSectionContent">
                <div className="col-3 logo">
                    <a href="">
                        <img src="media/logo1_f.png" alt="" className="img-fluid"/>
                    </a>
                </div>
                <div className="col-4 socialMedia">
                    <a href="https://www.facebook.com/ranjansomya.sethy/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/somya-ranjan/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/somyaranjansanu/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/somya_ranjan_" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="col-5 copyRight">
                    <h4>Copyright © 2021 Somyaranjan. All Rights Reserved.</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
