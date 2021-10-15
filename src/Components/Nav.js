import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-scroll'
function Nav() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = [' '];
    if (scrolled) {
        x.push('scrolled');
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${x.join("")}`}>
            <div className="container-fluid">
                <div className="col-3">
                    <a className="navbar-brand" href="">
                        <img src="media/logo1.png" alt="" className="img-fluid" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Aboute Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="portFolio"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >My PortFolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Hire Me</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
