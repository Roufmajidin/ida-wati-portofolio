import React, { useState } from 'react';

const About = ()=>{
    return(
        <>
        <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="text-container text-center">
                                <h1 className="h1-large">IDA WATI</h1>
                                <p style={{ color: "white" }}>
                                Sebagai lulusan S1 Sistem Informasi dari Universitas Catur Insan Cendekia dengan gelar S.kom. Saya memiliki pengetahuan dan minat tinggi untuk berkarir di bidang teknologi, administrasi, data entry, business analyst, UI/UX Designer, dan mampu mengoperasikan microsoft word, microsoft powerpoint dan microsoft excel. Saya memiliki sifat pantang menyerah, ingin terus belajar hal-hal baru dan mudah beradaptasi dengan lingkungan dan saya siap untuk memberikan kontribusi positif dalam tim dengan fokus pada tujuan perusahaan.
                                </p>
                                
                                <a className="btn-solid-lg page-scroll" href="#about" style={{ borderRadius: "10px" }} >About me</a>
                                <a className="btn-outline-lg page-scroll" href="https://medium.com/@idaw9765"><i className="fas fa-user" />Medium</a>
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
                                <h2>Pendidikan</h2>
                                <h6>Universitas Catur Insan Cendekia</h6>
                                <h6>Sistem Informasi</h6>
                                <div className="time">2020 - 2024 (IPK 3.91)</div>
                                <br></br>

                                <h2>Sertifikasi</h2>
                                <div className="time">Oktober 2024</div>
                                <h6>Pemakalah Seminar Nasional dan Teknologi (SISFOTEK)</h6>

                                <br></br>

                                <div className="time">September 2023 - Januari 2024</div>
                                <h6>MAGANG MANDIRI PTP TERMINAL NONPETIKEMAS BRANCH CIREBON </h6>
                                <p>Pendukung Operasional dan Teknik HSSE</p>
                                
                                
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container second">
                                

                                <div className="time">Februari - Juni 2023</div>
                                <h6>Studi Independen</h6>
                                <p>STUDI INDEPENDENT KAMPUS MERDEKA DI PT. MARKA KREASI PERSADA (ALTERRA ACADEMY) Malang, Indonesia</p>
                                
                                <div className="time">April – Juni 2022</div>
                                <h6>GOOGLE IDN TRAINING – Jakarta, Indonesia</h6>
                                <p>IT Support Google </p>

                                <div className="time">Februari 2023</div>
                                <h6>Dicoding Academy Indonesia</h6>
                                <p>Pelatihan Online (Memulai Pemrograman Dengan Java)</p>
                             
                            </div>
                            
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container third">
                                <div className="time">2022</div>
                                <h6>Himasi Festival 2022</h6>
                                <p>Juara 1 Tingkat Ciayumajakuning kategori lomba <b><i>tata tulis karya ilmiah</i></b> dalam acara Himasi Festival 2022 </p>
                                <div className="time">2022</div>
                                <h6>Himasi Festival 2022</h6>
                                <p>Juara 2 Tingkat Ciayumajakuning kategori lomba <b><i>Business Plan</i> </b> dalam acara Himasi Festival 2022</p>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
        </>
    )
}
export default About;