

export default function NavBarHome(){
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body bg-gradient clean-navbar navbar-light shadow" data-bs-theme="light" style={{height: "10%"}}>
        <div className="container">
            <div className="align-items-center" style={{display: 'flex',width: '100%',marginLeft: '0px',padding: '0px',paddingLeft: '0px',}}>
                <div style={{width: '25%',}}></div>
                <div className="justify-content-center align-items-center" style={{display: 'inline-flex',width: '50%',}}>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="../about-us/">About</a></li>
                        </ul>
                    </div><a className="navbar-brand logo" style={{marginRight: '0px',}} href="../">ManagEV</a>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="../contact/">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="justify-content-end align-items-center" style={{width: '25%',display: 'inline-flex',}}><a href="#"><button className="btn btn-primary btn-sm" type="button" style={{marginRight: '0px',background: 'rgb(33,37,41)',borderColor: '#000000',}}>Iniciar Sesion</button></a></div>
            </div>
        </div>
    </nav>
  )
}
