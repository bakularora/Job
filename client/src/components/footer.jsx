import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-gray text-light py-4" style={{ backgroundColor: '#333', color: '#f1f1f1' }}>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="font-weight-bold" style={{ fontWeight: 700, color: '#f1f1f1' }}>Quick Links</h5>
            <ul className="list-unstyled" style={{ paddingLeft: 0, listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}><a href="/" className="text-light" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }}>Home</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/about" className="text-light" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }}>About</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="font-weight-bold" style={{ fontWeight: 700, color: '#f1f1f1' }}>Contact Us</h5>
            <p>Email: <a href="mailto:support@jobfusion.com" className="text-light" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }}>support@jobfusion.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-light" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }}>+123 456 7890</a></p>
            <p>Follow us on:
              <a href="https://facebook.com" className="text-light mx-2" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }} target="_blank" rel="noopener noreferrer">Facebook</a> |
              <a href="https://twitter.com" className="text-light mx-2" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }} target="_blank" rel="noopener noreferrer">Twitter</a> |
              <a href="https://linkedin.com" className="text-light mx-2" style={{ color: '#f1f1f1', transition: 'color 0.3s ease' }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0" style={{ marginBottom: 0 }}>&copy; {new Date().getFullYear()} JobFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



