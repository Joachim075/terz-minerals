import React from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconPhoneCall } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './FooterSocial.css';

export function FooterSocial() {
  return (
<footer className="footer">
      <div className="container">
        <div className="social-icons">
          <Link to="#" target="_blank" className="social-icon"><IconBrandFacebook /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandTwitter /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandInstagram /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandLinkedin /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandWhatsapp /></Link>
          <Link to="tel:+123456789" target="_blank" className="social-icon"><IconPhoneCall /></Link>
          
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}