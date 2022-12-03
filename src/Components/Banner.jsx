import React from "react";
function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
        <div className="banner-img">
            <img src="/rr.gif" alt="" />
          </div>
          <div className="banner-content">
            <h4>Hello, I'm Wajeeha Haider</h4>
            <h3>SE Student</h3>
            <p>
            Iam currently studying in DHA Suffa with a massive interest in Web Developing. Check out my skill set.
            </p>
            <a className="btn" href="#experience">
              Lets go!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;