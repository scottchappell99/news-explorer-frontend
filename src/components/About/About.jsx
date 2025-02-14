import "./About.css";
import authorImage from "../../assets/images/scott-photo.jpg";

function About() {
  return (
    <aside className="about">
      <img
        src={authorImage}
        alt="A picture of Scott Chappell"
        className="about__image"
      />
      <h2 className="about__title">About the author</h2>
      <p className="about__text">
        Scott Chappell is an aspiring full-stack engineer. He has learned HTML,
        CSS, JavaScript, React, Node.js, and Git. Currently, Scott is an EMT in
        the New York City 911 system.
      </p>
      <p className="about__text">
        Scott has learned through TripleTen, which is a bootcamp for software
        development. He has completed a slate of projects for TripleTen, which
        can be seen at his github, below.
      </p>
    </aside>
  );
}

export default About;
