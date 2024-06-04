import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px auto;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 32px;
  color: var(--text---black);
`;

const Detail = styled.a`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color:  var(--text---roman-silver);
  text-decoration: none;
  cursor: pointer;
`;

interface CategoryProps {
  label: string;
}

const Category: React.FC<CategoryProps> = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Detail>See All</Detail>
    </Container>
  );
};

export default Category;
