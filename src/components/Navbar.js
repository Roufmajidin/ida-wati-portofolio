import React, { useState } from 'react';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <div className="container">
                    {/* Image Logo */}
                    {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a> */}
                    {/* Text Logo - Use this if you don't have a graphic logo */}
                    {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Mark</a> */}
                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#about">Tentang Saya</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#exp">Pengalaman</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#projects">Projek</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item page-scroll" href="project.html">Project Details</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#contact">Contact</a>
                            </li> */}
                        </ul>
                        <span className="nav-item social-icons">
                            {/* <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-twitter-f fa-stack-1x" />
                                </a>
                            </span> */}
                            <span className="fa-stack">
                                <a href="https://github.com/IdaWati15">
                                    <i className="fas fa-circle fa-stack-2x" />
                                    <i className="fab fa-github fa-stack-1x" />
                                </a>
                            </span>
                        </span>
                    </div> {/* end of navbar-collapse */}
                </div> {/* end of container */}
            </nav>

        </>
    )
}
export default Navbar;