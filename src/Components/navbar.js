import React from 'react';
import twitter from './assets/twitter.png';
import discord from './assets/discord.png';
import "./assets/start.css";
const Navbar = () => {
    return (
      <div className="logos">
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
    );
}

export default Navbar;
