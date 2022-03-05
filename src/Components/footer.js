import React from 'react';
import twitter from './assets/logos/twitter.png';
import discord from './assets/logos/discord.png';
import "./assets/styles/footer.css";

const Footer = () => {
    return (
      <div className="footer">
        <div className="faqs">
          <h2 id="headfaq">FAQs</h2>
           
        </div>
        <div className="footer-icons">
          <div className="logo-discord">
            <img
              src={discord}
              alt="discord-logo"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div className="logo-twitter">
            <img
              src={twitter}
              alt="twitter-logo"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
      </div>
    );
}

export default Footer;
