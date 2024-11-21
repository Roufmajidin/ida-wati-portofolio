import React, { } from "react";

const Project = ()=>{
    return (
        <>
          <div id="projects" className="basic-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Projek</h2>
                            <p className="p-heading">Beberapa Projek Selama Perkuliahan</p>
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                   
                </div> {/* end of container */}
            </div>

            <div className="basic-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-container">
                                <div className="image-container">
                                    <a href="https://github.com/IdaWati15/penilaian_karyawan">
                                        <img className="img-fluid" src="images/pr-1.jpg" alt="alternative" />
                                    </a>
                                </div> {/* end of image-container */}
                                <p>SISTEM PENUNJANG KEPUTUSAN PENILAIAN KINERJA MENGGUNAKAN METODE FUZZY MAMDANI UNTUK MENENTUKAN STATUS KARYAWAN (STUDI KASUS : PTP TERMINAL NONPETIKEMAS BRANCH CIREBON)</p>
                               <hr></hr>
                                 <strong>Project:</strong> Skripsi/Tesis <a className="blue" href="https://github.com/IdaWati15/penilaian_karyawan">Github</a>
                            </div> {/* end of text-container */}
                        </div> {/* end of col */}
                        <div className="col-lg-4">
                            <div className="text-container">
                                <div className="image-container">
                                    <a href="https://github.com/IdaWati15/wisata_cirebon_Kelompok2_UAS-PIL">
                                        <img className="img-fluid" src="images/pr-2.jpg" alt="alternative" />
                                    </a>
                                </div> {/* end of image-container */}
                                <p>APLIKASI REKOMENDASI WISATA CIREBON TUGAS KELOMPOK UAS </p>
                            <hr></hr>
                                 <strong>Project:</strong> Project Semester 6 kuliah <a className="blue" href="https://github.com/IdaWati15/wisata_cirebon_Kelompok2_UAS-PIL">Github</a>
                            </div> {/* end of text-container */}
                        </div>
                        <div className="col-lg-4">
                            <div className="text-container">
                                <div className="image-container">
                                    <a href="https://github.com/IdaWati15/wisata_cirebon_Kelompok2_UAS-PIL">
                                        <img className="img-fluid" src="images/pr-2.jpg" alt="alternative" />
                                    </a>
                                </div> {/* end of image-container */}
                                <p>TASK MANAGEMENT APP</p>
                            <hr></hr>
                                 <strong>Project:</strong> Project Semester 5 kuliah <a className="blue" href="https://github.com/IdaWati15/task_management_app">Github</a>
                            </div> {/* end of text-container */}
                        </div>
                       
                       
                        
                       
                      
                    </div> {/* end of row */}
                   
                     {/* end of row */}
                </div> {/* end of container */}
            </div>

        </>
    )
}
export default Project;