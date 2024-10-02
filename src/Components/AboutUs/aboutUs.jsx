import React from 'react';
import './aboutUs.css'; // Assuming a CSS file will be created for styling
import drone1 from '../../assets/drone1.jpg'
import drone2 from '../../assets/drone2.jpg'
import drone3 from '../../assets/drone3.jpg'
import droneImg from '../../assets/type-1kit.jpeg';

function AboutUs() {
  return (
    <section>
      <div className="about-us" id='aboutus'>
        <div className="about-us-heading">
          <h2>Drone Academy</h2>
          <p>What we Do</p>
        </div>
        <div className="about-us-cards">
          <div className="circles">
            <div className="about-us-cards-info">
              <div className="auci-img">
                <img src={drone1} alt="" />
              </div>
            </div>
          </div>
          <div className="about-us-cards-info">
            <div className="auci-img">
              <img src={drone2} alt="" />
            </div>
          </div>
          <div className="about-us-cards-info">
            <div className="auci-img">
              <img src={drone3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="cc-position">
        <div className="compound-card-circle">
          <div className="compound-card">
            <div className="cc-heading">
              <h3>This is going to be a heading</h3>
            </div>
            <div className="cc-component">
              <div className="cc-comp-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, laboriosam. Nihil ab provident veniam harum, aut deserunt sit quo, incidunt ex suscipit veritatis perferendis commodi rerum labore omnis illum corporis.</p>
              </div>
              <div className="cc-comp-img">
                <img src={droneImg} alt="drone image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
