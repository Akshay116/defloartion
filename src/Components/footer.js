import React from 'react';
import twitter from './assets/twitter.png';
import discord from './assets/discord.png';

const Footer = () => {
    return (
      <div className="footer">
        <div className="faqs">
          <h1>faqs</h1>
        </div>
        <div className="footer-icons">
          <img
            src={discord}
            alt="discord-logo"
            style={{ height: 50, width: 150 }}
          />
          <img
            src={twitter}
            alt="twitter-logo"
            style={{ height: 50, width: 150 }}
          />
        </div>
      </div>
    );
}

export default Footer;
