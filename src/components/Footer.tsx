import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              🚀 Aviora Launch
            </div>
            <p className="footer-brand-desc">
              We build modern websites, AI automations, and scalable SaaS
              solutions that help businesses grow faster.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-col-links">
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">AI Automation</a></li>
              <li><a href="#services">SaaS Solutions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-col-links">
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-col-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#contact">Book a Call</a></li>
              <li><a href="#contact">Get a Proposal</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Aviora Launch. All rights reserved.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="Twitter">𝕏</a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
            <a href="#" className="footer-social-link" aria-label="GitHub">⌘</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
