import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 88px;
  @media screen and (max-width: 500px) {
  width: 100%;
  height:auto;
  }
`
export const NavbarHead = styled.div`
  display:flex;
  justify-content:space-between;
`
export const NavbarRoute = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin:32px 32px 24px 0;
  @media screen and (max-width: 500px) {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin:24px 24px 0 0;
  }
  `
export const NavbarHeadContent = styled.h1`
  /* width: 158px; */
  height: 28px;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #ffffff;
  margin:38px 0 22px 32px;
  @media screen and (max-width: 500px) {
  /* width: 132px; */
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  margin:24px 0 0 16px;
  }

`