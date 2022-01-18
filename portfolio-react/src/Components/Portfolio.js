import archer from '../Images/archer-arena.png';
import covid from '../Images/covid-humidity.png';
import decidr from '../Images/decidr.png';

export default function Portfolio() {
    return(
        <div class="col-lg-12">
        <div class="m-3 p-3">
          <h2 class="text-center" id="education">Education</h2>
          <h4 class="m-0">California State University, Fresno</h4>
          <p class="m-0">May 2020</p>
          <p class="m-0"><i>Bachelor of Science</i></p>
          <p class="m-0">Computer Science</p>

          <h2 class="text-center" id="experience">Experience</h2>
          <h4 class="m-0">Web Developer & IT</h4>
          <p class="m-0">September 2020 – December 2020</p>
          <p class="m-0"><i>CBD Center CA LLC</i></p>
          <ul>
            <li>Fixed, upgraded, redesigned, and maintained main ecommerce website and optimized its SEO resulting in improved
              user experience and almost double traffic and sales</li>
            <li>Developed secondary ecommerce sites for CEO’s other companies using React and Express</li>
            <li>Restructured inventory resulting in increased sales and employee ease of use</li>
            <li>Managed social media on Facebook, Instagram, Google, and Avochato for brand promotion and attracted over 80
              new followers</li>
          </ul>

          <h2 class="text-center" id="skills">Skills</h2>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <p><strong>Languages:</strong> C++, Python, JavaScript, HTML, CSS, SQL</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <p><strong>Frameworks:</strong> React, Bootstrap, Node.js, Material-UI, Wordpress</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <p><strong>Developer Tools:</strong> Git, Visual Studio Code, Visual Studio, Jupyter, Google Cloud Platform</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <p><strong>Libraries:</strong> Redux, Pandas, NumPy, Matplotlib, OpenGL</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <p><strong>Coursework:</strong> Software Engineering, Web Development, Algorithms & Data Structures, Databases, Data Science &
                Analytics, Operating Systems, Computer Architecture, Computer Simulation, Computer Networks, Finite Automata</p>
            </div>
          </div>
        </div>

    <div id="projects">
        <h2 class="text-center">Projects</h2>
        <div class="container mb-5">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src={decidr} class="img-fluid" />
                    <h2 class="m-0">decidr</h2>
                    <p class="m-0">2021</p>
                    <a href="https://xmercado.github.io/decidr/" target="_blank" class="text-danger m-0">Launch App</a>
                    <a class="text-danger m-0">|</a>
                    <a href="https://github.com/xmercado/decidr" target="_blank" class="text-danger m-0">GitHub</a>
                    <p><i>React Native, JavaScript, MUI, HTML, CSS</i></p>
                    <ul>
                      <li>Learned and utilized React Native and Material UI</li>
                      <li>Assessed software development process through project board management</li>
                      <li>After quickly implementing minimum functionality, focused on UI and enhancements</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src={covid} class="img-fluid" />
                    <h2 class="m-0">The Study of Weather Effects on COVID-19</h2>
                    <p class="m-0">2020</p>
                    <a href="https://github.com/xmercado/CSCI191T-Corona-Weather-Reporters" target="_blank" class="text-danger m-0">GitHub</a>
                    <p><i>Python, Matplotlib, Pandas, NumPy, Jupyter, Git, Discord</i></p>
                    <ul>
                      <li>Extracted, transformed, and loaded various datasets related to early 2020 COVID-19, mortality rate, humidity level,
                        and ozone level</li>
                      <li>Analyzed data to conclude the relation on how various weather climates can affect COVID-19 infection rates</li>
                      <li>Collaborated in group of six students and compiled newfound data science results in 5000 word scholarly scientific
                        article and 10 minute video presentation</li>
                      <li>Presented article and video to university online seminar with over 200 student and professor attendees</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src={archer} class="img-fluid" />
                    <h2 class="m-0">Archer Arena</h2>
                    <p class="m-0">2017 - 2019</p>
                    <a href="https://archer-arena.herokuapp.com/" target="_blank" class="text-danger">Launch App</a>
                    <a class="text-danger m-0">|</a>
                    <a href="https://github.com/xmercado/archer-arena" target="_blank" class="text-danger m-0">GitHub</a>
                    <p><i>JavaScript, HTML, CSS, Node.js, Heroku, Git, Discord</i></p>
                    <ul>
                      <li>Developed persistent online multiplayer web browser shooter battle arena game</li>
                      <li>Responsible for Javascript game logic back-end in team of five developers</li>
                      <li>Frequently collaborated through Git and Discord and managed project using Agile process and UML diagrams</li>
                      <li>Presented game in various build versions four times to class of nearly 50 students allowing audience participation
                        through joining website</li>
                    </ul>
                </div>
            </div> 
        </div>
    </div>
  </div>
    )
}