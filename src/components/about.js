import React, { useState } from 'react';

const About = ()=>{
    return(
        <>
        <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h1 className="h1-large">Ida Wati</h1>
                                <p className="" style={{ color: "white" }}>
                                Sebagai lulusan S1 Sistem Informasi dari Universitas Catur Insan Cendekia, saya memiliki pengetahuan dan minat tinggi untuk berkarir di bidang teknologi, data entry, UI/UX Designer, mampu mengoperasikan microsoft word dan microsoft excel. Saya memiliki sifat pantang menyerah, terus belajar hal-hal baru dan mudah beradaptasi dengan lingkungan dan saya siap untuk memberikan kontribusi positif dalam tim dengan fokus pada tujuan perusahaan
                                </p>
                                
                                <a className="btn-solid-lg page-scroll" href="#about">About me</a>
                                <a className="btn-outline-lg page-scroll" href="linkedin.com/in/ida-wati-2235a325b"><i className="fas fa-user" />Linkedin</a>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </header>

            <div id="about" className="basic-1 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-container first">
                                <h2>Hi there I'm Ida Wati,</h2>
                                <p >
                                Sebagai lulusan S1 Sistem Informasi dari Universitas Catur Insan Cendekia, saya memiliki pengetahuan dan minat tinggi untuk berkarir di bidang teknologi, data entry, UI/UX Designer, mampu mengoperasikan microsoft word dan microsoft excel. Saya memiliki sifat pantang menyerah, terus belajar hal-hal baru dan mudah beradaptasi dengan lingkungan dan saya siap untuk memberikan kontribusi positif dalam tim dengan fokus pada tujuan perusahaan

                                </p>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container second">
                                <div className="time">2024</div>
                                <h6>Sistem Informasi</h6>
                                <p>Universitas Catur Insan Cendekia</p>
                                <div className="time">2023</div>
                                <h6>Magang Interhisp Program (IT Developer)</h6>
                                <p>MAGANG MANDIRI PTP TERMINAL NONPETIKEMAS BRANCH CIREBON </p>

                                <div className="time">2023</div>
                                <h6>Studi Independen</h6>
                                <p>STUDI INDEPENDENT KAMPUS MERDEKA DI PT. MARKA KREASI PERSADA (ALTERRA ACADEMY) Malang, Indonesia</p>
                                
                                <div className="time">April – Juni 2022</div>
                                <h6>GOOGLE IDN TRAINING – Jakarta, Indonesia</h6>
                                <p>IT Support Google </p>
                             
                            </div>
                            
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container third">
                                <div className="time">2022</div>
                                <h6>Himasi Festival 2022</h6>
                                <p>Tingkat Ciayumajakuning kategori lomba <b><i>tata tulis karya ilmiah</i></b> dalam acara Himasi </p>
                                <div className="time">2022</div>
                                <h6>Himasi Festival </h6>
                                <p>Tingkat Ciayumajakuning kategori lomba <b><i>Business Plan</i> </b> dalam acara Himasi Festival 2022</p>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
        </>
    )
}
export default About;