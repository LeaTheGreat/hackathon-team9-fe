import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <h2 className="footer__logo">SpectrumScreen+</h2>
        <div className="footer__links">
          <a href="https://linkedin.com">
            <LinkedInIcon />
          </a>
          <a href="http://instagram.com">
            <InstagramIcon />
          </a>
          <a href="https://github.com">
            <GitHub />
          </a>
        </div>
        <h6 className="footer__built">Proudly Built in Tel Aviv 🇮🇱</h6>
      </div>
      <div className="footer__bottom">
        <h6 className="footer__copy">&copy; 2021 All Righs Reserved.</h6>
        <p className="footer__people">
          Built with ❤️ by Lea Kagen, Violetta Kegels, Yegor Nilov, Ryan Roberts, David Frankenberg,
          and Tal
        </p>
      </div>
    </div>
  );
};

export default Footer;
