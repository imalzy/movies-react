import styled from "styled-components";
import Button from "./Button";
import PopOver from "./PopOver";

import filter from "./../assets/filter.svg";
import star from "./../assets/star.svg";
import people from "./../assets/people.svg";
import time from "./../assets/time.svg";
import { useState } from "react";

const NavbarContainer = styled.nav`
  box-shadow: 0 6px 24px 0 rgba(186, 186, 186, 0.2);
  background: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    align-items: normal;
    flex-direction: column;
  }
`;

const Brand = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
`;

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = (ev) => {
    setDropdown((prev) => !prev);
  };

  const handlePopOverClick = (ev) => {
    console.log(ev);
  };

  const lists = [
    { id: "share", label: "Share", icon: star },
    { id: "rename", label: "Rename", icon: people },
    { id: "status", label: "Status", icon: time },
  ];
  return (
    <NavbarContainer>
      <Brand href="#">
        <span style={{ color: "#008475" }}>THE </span> <span style={{ color: "#c5d86d" }}>Movies</span>
      </Brand>
      <div id="filters" style={{ position: "relative" }}>
        <Button img={filter} label="Filter" onChildEvent={handleClick} />
        {dropdown && (
          <PopOver labels={lists} onChildEvent={handlePopOverClick} />
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
