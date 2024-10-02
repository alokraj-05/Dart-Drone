import React from 'react';
import './contact.css';
import { configDotenv } from 'dotenv';
configDotenv


function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.WEB3_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert('Message sent successfully');
      event.target.reset();
    } else {
      alert("message can't be sent, try again", data);
      setResult(data.message);
    }
  };
  return (
    <div className='Contact' id='contact'>
      <div className="contact-form-left">
        <h2>Connect with us</h2>
        <div className="contact-data">
          <div className="data">
            <i class="fa-solid fa-location-dot"></i>
            <p>Touch some <br />Grass </p>
          </div>
          <div className="data">
            <i class="fa-solid fa-phone"></i>
            <p>(524) 453-3729<br />(981) 673-4542</p>
          </div>
        </div>
      </div>
      <div className="contact-form-right">
        <form onSubmit={onSubmit} action="" className='contactForm'>
          <h2>Message us</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;