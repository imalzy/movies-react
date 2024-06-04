import styled from "styled-components";

const Container = styled.div`
  width: 255px;
  min-height: 301px;
  border-radius: 10px;
  box-shadow: 0 16px 32px -4px rgba(145, 158, 171, 0.24),
    0 0 4px 0 rgba(145, 158, 171, 0.24);
  background: var(--text-white);
`;

const Header = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #000;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  color: #000;
`;
interface CardProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  release_date,
  poster_path,
}) => {
  return (
    <Container>
      <Header>
        <Image
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
          alt={id.toString()}
        />
      </Header>
      <Content>
        <Title>{title}</Title>
        <Description>2022 | Action comedy</Description>
        <Description>{release_date}</Description>
      </Content>
    </Container>
  );
};

export default Card;
