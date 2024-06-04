import styled from "styled-components";
import img1 from "../assets/img.jpg";

const Container = styled.div<{bgimg: string}>`
  height: 500px;
  overflow: hidden;
  background-image: url(${props => props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Banner = () => {
  return <Container bgimg={img1}></Container>;
};        

export default Banner;
