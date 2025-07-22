import '../style/Navbar.css'; // custom styles

function Navbar() {

  function handleNavLinkClick() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse.classList.contains('show')) {
    navbarToggler.click(); // This will trigger collapse
  }
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fancy-brand text-white" href="#home">
  <strong style={{ color: '#ffffff' }}>Darsh</strong>
  <span style={{ color: '#cccccc', fontWeight: 300 }}> | Interior Design Portfolio</span>
</a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-links">
             <li className="nav-item">
              <a className="nav-link text-white" href="#home" onClick={handleNavLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio" onClick={handleNavLinkClick}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services" onClick={handleNavLinkClick}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#education" onClick={handleNavLinkClick}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about" onClick={handleNavLinkClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact" onClick={handleNavLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
