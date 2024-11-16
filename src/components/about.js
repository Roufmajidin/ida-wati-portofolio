import React from 'react';

const About = () => {
  // Data array
  const education = [
    {
      title: "Universitas Catur Insan Cendekia",
      subtitle: "Sistem Informasi",
      time: "2020 - 2024 (IPK 3.91)",
    },
  ];

  const certifications = [
    {
      time: "Oktober 2024",
      title: "Pemakalah Seminar Nasional dan Teknologi (SISFOTEK)",
    },
    {
      time: "September 2023 - Januari 2024",
      title: "MAGANG MANDIRI PTP TERMINAL NONPETIKEMAS BRANCH CIREBON",
      description: "Pendukung Operasional dan Teknik HSSE",
    },
  ];

  const experiences = [
    {
      time: "Februari - Juni 2023",
      title: "Studi Independen",
      description: "STUDI INDEPENDENT KAMPUS MERDEKA DI PT. MARKA KREASI PERSADA (ALTERRA ACADEMY) Malang, Indonesia",
    },
    {
      time: "April – Juni 2022",
      title: "GOOGLE IDN TRAINING – Jakarta, Indonesia",
      description: "IT Support Google",
    },
    {
      time: "Februari 2023",
      title: "Dicoding Academy Indonesia",
      description: "Pelatihan Online (Memulai Pemrograman Dengan Java)",
    },
  ];

  const achievements = [
    {
      time: "2022",
      title: "Himasi Festival 2022",
      description: "Juara 1 Tingkat Ciayumajakuning kategori lomba tata tulis karya ilmiah dalam acara Himasi Festival 2022",
    },
    {
      time: "2022",
      title: "Himasi Festival 2022",
      description: "Juara 2 Tingkat Ciayumajakuning kategori lomba Business Plan dalam acara Himasi Festival 2022",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-container text-center">
                <h1 className="h1-large">IDA WATI</h1>
                <p style={{ color: "white" }}>
                  Sebagai lulusan S1 Sistem Informasi dari Universitas Catur Insan Cendekia dengan gelar S.kom. Saya memiliki pengetahuan dan minat tinggi untuk berkarir di bidang teknologi, administrasi, data entry, business analyst, UI/UX Designer, dan mampu mengoperasikan microsoft word, microsoft powerpoint dan microsoft excel. Saya memiliki sifat pantang menyerah, ingin terus belajar hal-hal baru dan mudah beradaptasi dengan lingkungan dan saya siap untuk memberikan kontribusi positif dalam tim dengan fokus pada tujuan perusahaan....
                </p>
                <a className="btn-solid-lg page-scroll" href="#about" style={{ borderRadius: "10px" }}>
                  About me
                </a>
                <a className="btn-outline-lg page-scroll" href="https://medium.com/@idaw9765">
                  <i className="fas fa-user" /> Medium
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <div id="about" className="basic-1 bg-gray">
        <div className="container">
          <div className="row">
            {/* Pendidikan */}
            <div className="col-lg-4">
              <div className="text-container first">
                <h2>Pendidikan</h2>
                {education.map((item, index) => (
                  <div key={index}>
                    <h6>{item.title}</h6>
                    <h6>{item.subtitle}</h6>
                    <div className="time">{item.time}</div>
                  </div>
                ))}

                <br />
                <h2>Sertifikasi</h2>
                {certifications.map((item, index) => (
                  <div key={index}>
                    <div className="time">{item.time}</div>
                    <h6>{item.title}</h6>
                    {item.description && <p>{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Pengalaman */}
            <div className="col-lg-4">
              <div className="text-container second">
                {experiences.map((item, index) => (
                  <div key={index}>
                    <div className="time">{item.time}</div>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pencapaian */}
            <div className="col-lg-4">
              <div className="text-container third">
                {achievements.map((item, index) => (
                  <div key={index}>
                    <div className="time">{item.time}</div>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
