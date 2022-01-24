import styles from './HeaderStyle.css';

const Header = ()=>{

    return (
        <header className={styles.container}>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <span className="fs-4">Pricing example</span>
    
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
            <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
            <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
          </nav>
        </div>
    
      </header>
    );
}

export default Header;