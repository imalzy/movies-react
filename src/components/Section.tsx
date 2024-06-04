import styled from "styled-components";

const Content = styled.section`
//   max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <Content>{children}</Content>;
};

export default Section;
