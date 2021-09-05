import logoLanacion from "../../assets/Nav/placeholderLN.jpg";
import barsIconBlack from '../../assets/Nav/Buttons/bars-solid-black.svg';
import barsIconBlue from '../../assets/Nav/Buttons/bars-solid-blue.svg';
import searchIconBlack from '../../assets/Nav/Buttons/search-solid-black.svg';
import searchIconBlue from '../../assets/Nav/Buttons/search-solid-blue.svg';

export function Nav() {
  return (
    <div className="Nav">
      <div className="Nav_buttonContainer">
        <button className="Nav_bt_secciones">
        <img src={barsIconBlack} className="Nav_bt_secciones_iconBlack" alt="menuIcon"/>
        <img src={barsIconBlue} className="Nav_bt_secciones_iconBlue" alt="menuIcon"/>
          <span> SECCIONES </span>
        </button>
        <button className="Nav_bt_buscar">
        <img src={searchIconBlack} className="Nav_bt_buscar_iconBlack" alt="searchIcon"/>
        <img src={searchIconBlue} className="Nav_bt_buscar_iconBlue" alt="searchIcon"/>
          <span> BUSCAR </span>{" "}
        </button>
      </div>
      <img alt="La Nacion logo" src={logoLanacion} className="Nav_lanacion" />
      <div className="Nav_buttonContainer">
        <button className="Nav_bt_suscribite">
          {" "}
          <span> SUSCRIBITE </span>{" "}
        </button>
        <button className="Nav_bt_ingresar">
          {" "}
          <span> INGRESAR </span>{" "}
        </button>
      </div>
    </div>
  );
}
