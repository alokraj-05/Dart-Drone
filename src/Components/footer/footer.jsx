import React from 'react';
import './footer.css'; // Assuming a CSS file will be created for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Exodus. This project is created by Exodus check out my <a href="https://github.com/alokraj-05" target='_blank'>github <i class="fa-brands fa-github"></i></a></p>
        <div className="social-links">
          <a href='mailto:exodus.shard@gmail.com' target='_blank' rel='"noopener noreferrer'><i class="fa-solid fa-envelope"></i></a>
          <a href="https://github.com/alokraj-05" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://discord.com/users/1161611783891587122" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
