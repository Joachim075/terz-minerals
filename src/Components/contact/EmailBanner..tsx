import React from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin, IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './EmailBanner.module.css';

export function EmailBanner() {
  return (
    <footer className="footer" style={{ backgroundImage: `url('your_bg_image_url_here')` }}>
      <div className="container" style={{ maxWidth: '600px' }}> {/* Adjust max-width here */}
        <div className="social-icons">
          <Link to="#" target="_blank" className="social-icon"><IconBrandFacebook /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandTwitter /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandInstagram /></Link>
          <Link to="#" target="_blank" className="social-icon"><IconBrandLinkedin /></Link>
          <Link to="tel:+123456789" target="_blank" className="social-icon"><IconPhoneCall /></Link>
          <Link to="https://wa.me/123456789" target="_blank" className="social-icon"><IconBrandWhatsapp /></Link>
        </div>
        
        <p style={{fontSize:'20px'}}>Reach out to us.</p>
      </div>
    </footer>
  );
}
