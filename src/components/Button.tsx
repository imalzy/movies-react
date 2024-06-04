import React from "react";
import { useState } from "react";
import styled from "styled-components";
const ContainerButton = styled.button`
  border: 1px solid rgba(157, 162, 179, 0.12);
  background: var(--brand-celadon-green);
  border-radius: 5px;
  padding: 8px;
  min-width: 79px;
  cursor: pointer;
  display: flex;
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 107%;
    color: var(--text-white);
    opacity: 0.6;
  }
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

interface ButtonProps {
  img: string;
  label: React.ReactNode;
  onChildEvent: (message: boolean) => void;
}

const Button: React.FC<ButtonProps> = React.memo(({ img, label, onChildEvent }) => {
  const [val, setVal] = useState(true);
  const handleClick = React.useCallback(() => {
    setVal((val) => !val);
    onChildEvent(val);
  }, [onChildEvent, val]);

  return (
    <ContainerButton type="button" onClick={handleClick}>
      <Icon src={img} alt="filter" />
      <span>{label}</span>
    </ContainerButton>
  );
});

export default Button;
