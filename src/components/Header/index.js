import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import TMDBLogo from "../../images/tmdb_logo.svg";
import Logo from "../../images/logo.jpeg";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
