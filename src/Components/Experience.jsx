import React from 'react'

function Experience() {
  return (
    <section className="experience" id="experience">
    <div className="container">
    <div className="experience-wrapper">
    <div className="experience-img">
            <img src="/hello.jpg" alt="" />
    </div>
        <div className="experience-content">
        <h4>Service</h4>
            <p>
          Programming Languages: HTML, CSS, C/C++, JavaScript(basic), Java<br/>
            Source Control: GitHub<br/>
	        Database: MySQL<br/>
            Tools: Figma, Google, VS Code
            </p>
          <a
            href="https://docs.google.com/document/d/19RAWymkM3tRj_ngnAj3wEDMSoWHGpVeZiWNooyeNGso/edit?usp=sharing"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            CV
          </a>
          <br/>
          <h4>Experience</h4>
            <p>
          Participated in Hackfest 
	Built an app prototype according to the UN 17 SDGs.
     The app kept track of the fetus of a pregnant woman and made it possible to order layette as 
     well as baby food from the same app. Using this idea, we were able to place 4th in a total of 45 teams.  

            </p>
          <a
            href="https://www.linkedin.com/in/wajeeha-haider-05b582234"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            Connect with Me.
          </a>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Experience
