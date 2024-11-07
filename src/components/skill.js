const Skill = ()=>{
    return(
        <>
         <div className="split" id="exp">
                <div className="area-1">
                </div>{/* end of area-1 on same line and no space between comments to eliminate margin white space */}<div className="area-2 bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Text Container */}
                                <div className="text-container">
                                    <h2>My Experiences</h2>
                                    <p> Kemampuan Komputasi (Ms. Word, Excel, PowerPoint), Figma (Desain UI/UX), Analisis dan Desain Sistem, Canva (Desain Grafis), Kemampuan Personal (Komunikatif, Teliti, Kemampuan Analisis, Kerjasama Tim)
                                    </p>
                                    <h5>DESIGN TOOLS</h5>
                                    <p>My favorite design tools Figma</p>
                                    <h5>DEVELOPMENT SKILLS</h5>
                                    <p>Laravel Framework, MATLAB for Analytic data scince</p>
                                    <div className="icons-container">
                                        <img src="images/lar.png" alt="alternative" />
                                        <img src="images/matlab.png" alt="alternative" />
                                        <img src="images/office.png" alt="alternative" />
                                        <img src="images/figma.png" alt="alternative" />
                                    </div>
                                     {/* end of icons-container */}
                                </div> {/* end of text-container */}
                                {/* end of text container */}
                            </div> {/* end of col */}
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div> {/* end of area-2 */}
            </div>
        </>
    )
}
export default Skill;