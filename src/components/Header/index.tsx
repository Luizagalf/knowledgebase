import "./header.scss";
import exclamationPoint from "assets/img/exclamationPoint.svg";
import { observer } from "mobx-react-lite";
import { useStores } from "stores";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { dataStore } = useStores();

  return (
    <header className="header">
      <div>
        <NavLink to="/main" className="header_logo">
          <h1>
            Fron
            <span style={{ color: "#f1df6f" }}>t</span>end
          </h1>
          <img src={exclamationPoint} alt="" />
        </NavLink>
        <NavLink to="/main" className="header_item">
          Main
        </NavLink>
        <NavLink to="/html" className="header_item">
          HTML
        </NavLink>
        <NavLink to="/css" className="header_item">
          CSS
        </NavLink>
        <NavLink to="/javascript" className="header_item">
          JavaScript
        </NavLink>
        <NavLink to="/react" className="header_item">
          React
        </NavLink>
      </div>
      <div>
        <div>
          <p
            onClick={() => dataStore.setLanguage("en")}
            style={{
              transform: dataStore.language === "en" ? "scale(1.1)" : "",
              borderBottom:
                dataStore.language === "en" ? "1px solid #551a8b" : ""
            }}
          >
            EN
          </p>
          <p
            onClick={() => dataStore.setLanguage("rus")}
            style={{
              transform: dataStore.language === "rus" ? "scale(1.1)" : "",
              borderBottom:
                dataStore.language === "rus" ? "1px solid #551a8b" : ""
            }}
          >
            RU
          </p>
        </div>
        <div className="header__end"> Hier will be search</div>
      </div>
    </header>
  );
};

export default observer(Header);
