import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import profileImage from './profile.png';


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">Visweswara Rao</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#internships">Internships</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center d-flex flex-column justify-content-center align-items-center vh-100 bg-primary text-white animate__animated animate__fadeIn">
        <h1 className="display-4">Hi, I'm Perisetti Visweswara Rao</h1>
        <p className="lead">Entry-Level Data Scientist | Data Analyst | AI Enthusiast</p>
        <div className="mt-4">
          <a href="https://github.com/P-Vishwa411" target="_blank" rel="noopener noreferrer" className="btn btn-light m-2">GitHub</a>
          <a href="https://www.linkedin.com/in/contact-vishwa-p/" target="_blank" rel="noopener noreferrer" className="btn btn-light m-2">LinkedIn</a>
          <a href="mailto:chantip050@gmail.com" className="btn btn-light m-2">Email Me</a>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="container py-5 animate__animated animate__fadeInUp">
        <h2 className="text-center mb-5">Education</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>B.Tech - AI & Data Science</h4>
            <p>Sagi Rama Krishnam Raju Engineering College (2022-2025)</p>
            <p>CGPA: 7.34</p>
          </div>
          <div className="col-md-6">
            <h4>Diploma - Computer Engineering</h4>
            <p>Andhra Polytechnic College (2019-2022)</p>
            <p>Percentage: 82.92%</p>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="bg-light py-5 animate__animated animate__fadeInUp">
        <div className="container">
          <h2 className="text-center mb-5">Internships</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Business Analyst Intern - Qlik</h5>
              <p>April 2024 - June 2024</p>
              <ul>
                <li>Worked on data analysis and business intelligence projects.</li>
                <li>Analyzed airline data for peak travel times and revenue optimization.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Data Science & AIML Intern - Henotic Technology</h5>
              <p>July 2023 - August 2023</p>
              <ul>
                <li>Developed a model to predict IIT/NIT admission ranks with 92% accuracy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-5 animate__animated animate__fadeInUp">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Crop Production Analysis</h5>
                <p className="card-text">Built a machine learning model achieving 97% accuracy using Python and scikit-learn.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Law Chatbot</h5>
                <p className="card-text">Created an AI chatbot to retrieve legal articles with 95% accuracy using LLM, NLP, and Streamlit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-light py-5 animate__animated animate__fadeInUp">
        <div className="container">
          <h2 className="text-center mb-5">Skills</h2>
          <div className="row text-center">
            <div className="col-md-4">Python, Java, C, R</div>
            <div className="col-md-4">HTML, CSS, JavaScript</div>
            <div className="col-md-4">MySQL, MongoDB</div>
            <div className="col-md-4">Power BI, Qlik, Git, GitHub</div>
            <div className="col-md-4">Pandas, NumPy, Excel</div>
            <div className="col-md-4">ChatGPT, Codeium, Gemini</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-primary text-white py-5 animate__animated animate__fadeInUp">
        <div className="container text-center">
          <h2>Get in Touch</h2>
          <p>Email: chantip050@gmail.com</p>
          <p>GitHub: <a className="text-white" href="https://github.com/P-Vishwa411" target="_blank" rel="noopener noreferrer">P-Vishwa411</a></p>
          <p>LinkedIn: <a className="text-white" href="https://www.linkedin.com/in/contact-vishwa-p/" target="_blank" rel="noopener noreferrer">contact-vishwa-p</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
