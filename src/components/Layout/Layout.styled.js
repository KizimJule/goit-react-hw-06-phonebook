import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  /* > nav {
    display: flex;
    gap: 24px;
  } */
`;
export const Container = styled.div``;
export const Section = styled.section`
  padding: 20px 24px;
  margin: 0 auto;
  max-width: 1280px;
`;
export const Nav = styled.nav`
  display: flex;
  font-size: 40px;
  margin: 0 auto;
  max-width: 1280px;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: #c83349;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #7a3b2e;
  }
`;
export const Footer = styled.footer`
  text-align: center;
  padding: 6px 12px;
  border-top: 3px solid #6a679e;
`;
