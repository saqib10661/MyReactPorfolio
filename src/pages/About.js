import React from "react";
import image from '../images/Saqib.jpg';

function About() {
  return (
    <div className="me">
      <h1> Me!!!!!!</h1>
      <p className="about">Ever since i knew what a website actually was and whenever i played a game rather
      than just playing the game or browsing through the website i always wondered how they were created which 
      might have been my first exposure and passion to the world of Software Development and since then i have
        not looked back, doing my college course and then completing my bachelors in Computer Science and finally
        completing my Masters degree in Advanced Computer Science.<br/>
        </p>
      <p className="about">
      Now my aim is to find a job in the Computer Science industry. 
      Although i do not have much experience in the work industry, 
      I am excited to broaden my horizons by working in a computer 
      based industry in the near future, but i have worked in small sectors 
      such as the retail sector which have greatly added to my confidence in 
      working in teams and understanding other peoples points of view. I am very
      patient, enthusiastic and creative. In university i have experienced a few 
      programming languages which i greatly enjoyed some of these were 
      Python, Java, C# etc and markup languages such as HTML and CSS which will
        help me gain work possibilities and i hope to learn more as i gain further experience.
      </p>
      <div className="imageabout">
        <img src={image} alt="" />
      </div>
      <h3 id="me">Saqib Mahmood<br/>(Msc Advanced Computer Science Graduate)</h3>
  </div>
  )
}

export default About;
