import { useState, useEffect } from "react";
import { Nav, NavLink, MobileIcon, NavMenu, PhoneLink } from "./style";
import { useTranslation } from "react-i18next";
import { Turn as Hamburger } from "hamburger-react";

export default function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <Nav>
        <NavLink to="/profile">
          <span>Logo</span>
        </NavLink>
        <MobileIcon onClick={handleClick} click={click}>
          <Hamburger
            duration={0.8}
            rounded
            size={24}
            toggled={click}
            toggle={setClick}
          />
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavLink href="#courses" style={{ paddingTop: "13px" }}>
            <button className="nav-btn">Модули</button>
          </NavLink>
          <NavLink href="#aboutUs" style={{ paddingTop: "13px" }}>
            <button className="nav-btn">новости</button>
          </NavLink>
          <NavLink href="#aboutUs" style={{ paddingTop: "13px" }}>
            <button className="nav-btn">ресурсы</button>
          </NavLink>
          <NavLink href="#aboutUs" style={{ paddingTop: "13px" }}>
            <button className="nav-btn">Поддержка</button>
          </NavLink>
          <NavLink href="#aboutUs" style={{ paddingTop: "13px" }}>
            <button className="nav-btn">профиль</button>
          </NavLink>
          <NavLink href="#aboutUs" style={{ paddingTop: "13px" }}>
            <button className="nav-btn">язык</button>
          </NavLink>
          <PhoneLink
            href="tel:+998555003700"
            style={{ paddingTop: "13px" }}
            className="media-d-block-link"
          >
            +998 (55)-500-37-00
          </PhoneLink>
        </NavMenu>
      </Nav>
    </div>
  );
}
