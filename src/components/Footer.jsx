import logo from '../assets/amigo.png';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid rgba(156, 139, 114, 0.2)',
        padding: '36px 0',
      }}
      id="footer"
    >
      <div className="section-container">
        {/* Centered Logo */}
        <img
          src={logo}
          alt="InAmigos Foundation"
          style={{
            height: '52px',
            width: 'auto',
            opacity: 0.85,
            marginBottom: '20px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          {/* Logo */}
          <div className="font-display text-lg" style={{ color: 'var(--chalk)' }}>
            In<span style={{ color: 'var(--saffron)' }}>Amigos</span>{' '}
            <span style={{ color: 'var(--dust)' }}>Foundation</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://www.instagram.com/inamigos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body no-underline transition-colors duration-200 hover:text-saffron"
              style={{ color: 'var(--dust)' }}
              id="footer-instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/inamigos.inamigos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body no-underline transition-colors duration-200 hover:text-saffron"
              style={{ color: 'var(--dust)' }}
              id="footer-facebook"
            >
              Facebook
            </a>
            <a
              href="mailto:inamigosfoundation@gmail.com"
              className="text-sm font-body no-underline transition-colors duration-200 hover:text-saffron"
              style={{ color: 'var(--dust)' }}
              id="footer-email"
            >
              inamigosfoundation@gmail.com
            </a>
            <a
              href="tel:+916267309902"
              className="text-sm font-body no-underline transition-colors duration-200 hover:text-saffron"
              style={{ color: 'var(--dust)' }}
              id="footer-phone"
            >
              +91 626 730 9902
            </a>
          </div>
        </div>

        {/* Address & copyright */}
        <div
          className="mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-2"
          style={{ borderTop: '1px dashed rgba(156, 139, 114, 0.25)' }}
        >
          <p className="text-xs" style={{ color: 'var(--dust)' }}>
            Ward No. 5, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh – 495555
          </p>
          <p className="text-xs" style={{ color: 'var(--dust)', opacity: 0.6 }}>
            © {new Date().getFullYear()} InAmigos Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
