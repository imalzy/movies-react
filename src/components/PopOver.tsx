import React from "react";
import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 130px;
  height: auto;
  background: var(--text-white);
  border: 1px solid var(--brand-celadon-green);
  border-radius: 5px;
  box-shadow: 5px 16px 27px 0 rgba(27, 31, 39, 0.3);

  position: absolute;
  right: 1px;
  top: 40px;
`;

const Lists = styled.ul`
  width: 100%;
  color:var(--text-white);
  background: var(--brand-celadon-green);
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

const List = styled.li`
  padding: 14px 8px;
  width: 100%;

  &:hover {
    cursor: pointer;
    color: var(--brand-celadon-green);
    background: var(--text-white);
  }
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

interface PopOverProps {
  labels: { id: string; label: string; icon: string }[];
  onChildEvent: (message: string) => void;
}

const PopOver: React.FC<PopOverProps> = React.memo(({ labels, onChildEvent }) => {
  const handleClick = React.useCallback((id: string) => {
    onChildEvent(id);
  }, [onChildEvent]);

  return (
    <Container>
      <Lists>
        {labels.map((label) => (
          <List key={label.id} onClick={() => handleClick(label.id)}>
            <Icon src={label.icon} alt={label.label} />
            <span>{label.label}</span>
          </List>
        ))}
      </Lists>
    </Container>
  );
});

export default PopOver;
