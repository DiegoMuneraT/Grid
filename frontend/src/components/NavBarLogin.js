import { Link } from "react-router-dom";

export default function NavBarLogin() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body bg-gradient clean-navbar navbar-light shadow" data-bs-theme="light">
        <div className="container">
            <div className="align-items-center" style={{display: 'flex', width: '100%', marginLeft: '0px', padding: '0px', paddingLeft: '0px',}}>
                <div style={{width: '25%',}}></div>
                <div className="justify-content-center align-items-center" style={{display: 'inline-flex', padding: '0 0 0 1rem', width: '50%'}}>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/acerca-de-nosotros/">About</Link></li>
                        </ul>
                    </div><Link className="navbar-brand logo" to="/" style={{marginRight: '0px',}}>ManagEV</Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{padding: '0 0 0 32px',}}><Link className="nav-link" to="/contacto/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="justify-content-end align-items-center" style={{width: '25%', display: 'inline-flex',}}></div>
            </div>
        </div>
    </nav>
  )
}
