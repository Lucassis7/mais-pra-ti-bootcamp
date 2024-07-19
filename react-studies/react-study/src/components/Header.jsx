import logoImage from "../assets/your-logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <img src={logoImage} alt="" />
      <nav>
        <ul>
          <li>Sobre Nós</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
