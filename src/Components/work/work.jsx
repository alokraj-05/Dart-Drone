import React from "react";
import "./work.css";
import leftImage from "../../assets/react.svg";
import kit1 from "../../assets/type-1kit.jpeg"

function Work() {
  const handleKnowMoreClick = () => {
    const knowMoreExpandElement = document.querySelector('.know-more-expand');
    if (knowMoreExpandElement.style.display === "block") {
      knowMoreExpandElement.style.display = "none";
    } else {
      knowMoreExpandElement.style.display = "block";
    }
  }

  React.useEffect(() => {
    const knowMoreElement = document.querySelector('.know-more a');
    knowMoreElement.addEventListener('click', handleKnowMoreClick);

    return () => {
      knowMoreElement.removeEventListener('click', handleKnowMoreClick);
    }
  }, []);
  return (
    <section>
      <div className="work-container" id="work">
        <div className="work-container-left">
          <div className="work-image">
            {/* <img src={leftImage} alt="" /> */}
            <i className="fa-solid fa-earth-asia"></i>
            <i className="fa-brands fa-phoenix-squadron"></i>
          </div>
        </div>
        <div className="work-container-right">
          <p>our Practice</p>
          <h2>We teach you the arial art</h2>
          <p>
            As a drone maker and educator, I am deeply grateful for the
            opportunity to share my passion for drones with the world and to
            inspire others to embark on their own journey of discovery.
          </p>
          <br />
          <div className="know-more">
            <a>Know more</a>
          </div>

        </div>
      </div>
      <div className="work-statics">
        <div className="work-statics-blur">
          <div className="statics">
            <h2>
              <i class="fa-solid fa-people-group"></i> Peoples
            </h2>
            <p>100+</p>
          </div>
          <hr />
          <div className="statics">
            <h2>
              <i class="fa-solid fa-bars-progress"></i> Projects
            </h2>
            <p>20+</p>
          </div>
          <hr />
          <div className="statics">
            <h2>
              <i class="fa-regular fa-calendar-check"></i> Years
            </h2>
            <p>3+</p>
          </div>
        </div>
      </div>
      <div className="models">
        <div className="model-cards modelCard1">
          <div className="model-card-heading">
            <h3>Card Layout</h3>
          </div>
          <div className="lower-content">
            <h5>sub heading</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error illum aut alias eos numquam distinctio, quam aliquam reiciendis magnam tempora molestiae ab animi corporis aperiam, ad blanditiis commodi perferendis!</p>
          </div>
          <div className="model-card-footer">
            <a href="">read more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="model-cards modelCard2">
          <div className="model-card-heading">
            <h3>Card Layout</h3>
          </div>
          <div className="lower-content">
            <h5>sub heading</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error illum aut alias eos numquam distinctio, quam aliquam reiciendis magnam tempora molestiae ab animi corporis aperiam, ad blanditiis commodi perferendis!</p>
          </div>
          <div className="model-card-footer">
            <a href="">read more <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="model-cards modelCard3">
          <div className="model-card-heading">
            <h3>Card Layout</h3>
          </div>
          <div className="lower-content">
            <h5>sub heading</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error illum aut alias eos numquam distinctio, quam aliquam reiciendis magnam tempora molestiae ab animi corporis aperiam, ad blanditiis commodi perferendis!</p>
          </div>
          <div className="model-card-footer">
            <a href=""><p>read more</p> <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
