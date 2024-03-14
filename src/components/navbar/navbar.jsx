import React from "react";
import { Login, NavbarBtn, NavbarItem, NavbarLogo, Container } from "./style";
import Logo from "../../assest/icon/Logo.png";
import vector from "../../assest/icon/Vector.png";
import ico from "../../assest/icon/Vector (1).png";
import logout from "../../assest/icon/Logout.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <NavbarLogo>
        <img src={Logo} alt="" />
      </NavbarLogo>
      <NavbarItem>
      <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/shop">
          <a>Shop</a>
        </Link>
        {/* <Link to="/shopcart">
          <a>ShopCart</a>
        </Link> */}
        <a href="#blogs">Blogs</a>
      </NavbarItem>
      <NavbarBtn>
        <img src={vector} alt="" />
        <img src={ico} alt="" />
        <Login>
          {" "}
          <img src={logout} alt="" /> Login
        </Login>
      </NavbarBtn>
    </Container>
  );
};

export default Navbar;
