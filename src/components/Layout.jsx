import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
    const currentClass = ({ isActive }) => (isActive ? "current" : "");

    return(
        <>
            <header id="header"></header>
            <nav id="nav-bar">
                <ul id="nav-menu">
                    <li id="home-btn" className="nav-btn"><NavLink to="/kartoon-fool-react/" end className={currentClass}><i className="material-icons">home</i>Home</NavLink></li>
                    <li id="about-btn" className="nav-btn"><NavLink to="/kartoon-fool-react/about" className={currentClass}><i className="material-icons">account_box</i>About</NavLink></li>
                    <li id="gallery-btn" className="nav-btn"><NavLink to="/kartoon-fool-react/gallery" className={currentClass}><i className="material-icons">palette</i>Gallery</NavLink></li>
                    <li id="contact-btn" className="nav-btn"><NavLink to="/kartoon-fool-react/contact" className={currentClass}><i className="material-icons">email</i>Contact</NavLink></li>
                </ul>
                <div id="social-links">
                    <div id="deviantart" className="radial-btn"></div>
                    <div id="twitter" className="radial-btn"></div>
                </div>
            </nav>
            <main id="page-content">
                <div id="content-container">
                    <Outlet />
                </div>
            </main>
            <footer id="footer">
                <div id="kartoon-fool"><span id="copyright">&copy;</span>2024 Kaloyan Kirilov.</div>
                <div id="web-dev">Web design & development by&nbsp;<a id="kaloyan-kirilov" href="https://kaloyan-kirilov.github.io/" target="_blank">Kaloyan Kirilov</a>.</div>
            </footer>
        </>
    );
}

export default Layout;