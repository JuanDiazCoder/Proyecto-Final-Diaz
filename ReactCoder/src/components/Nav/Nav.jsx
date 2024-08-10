import { Link } from "react-router-dom";
import CardWidget from '../../svgs/CardWidget/CardWidget';
import './Nav.css';
import InfoTooltip from "../../svgs/InfoTooltip/infoTooltip";
import Logo from "../../svgs/logo/logo";


// eslint-disable-next-line react/prop-types 
function Nav({  title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="navbar-brand mb-1 d-flex align-items-center justify-content-center">
        <Logo /> {title} <Logo />
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Deportivos">Deportivos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/AltaG">Alta gama</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Ciudad">De ciudad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Carrito</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary nav-item circle" style={{ height: "40px", width: "60px", marginRight: "10px" }}>
                <CardWidget />
              </button>
            </li>
            <li className="nav-item" style={{ alignContent: "center" }}>
              <InfoTooltip />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
