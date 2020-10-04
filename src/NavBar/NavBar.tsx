import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './NavBar.scss';
function NavBar() {
    const [toggle, setToggle] = useState(true);
    const navCollapsed = toggle ? 'collapse' : '';
    const handleMenu = () => {
        setToggle(!toggle);
    };
    return (
        <div className="NavBar">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenu}>
                        <span className="navbar-toggler-icon">
                            <MenuIcon />
                        </span>
                    </button>
                    <div className={`${navCollapsed} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Hom
                             <span className="nav-link__red">e</span>
                             <span className="sr-only">(current)</span>
                             </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#no-action">App
                            <span className="nav-link__red">s</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#no-action">Contact M
                            <span className="nav-link__red">e</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;