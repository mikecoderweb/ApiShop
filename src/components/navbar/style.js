import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;
const NavbarLogo = styled.div``;
const NavbarItem = styled.div`
  display: flex;
  gap: 20px;
  > a {
    text-decoration: none;
    font-size: 23px;
    font-weight: 200;
    color: #3d3d3d;
    font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
  a:hover  {
  background-color: #000;
  color: #fff;
  }
`;

const NavbarBtn = styled.div`
  display: flex;
  gap: 30px;
 > img {
  width: 20px;
  height: 20px;
  cursor: pointer;
 }
`
;
const Login = styled.button`
  width: 100px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #46a358;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export { Container, NavbarLogo, NavbarItem, NavbarBtn, Login };
