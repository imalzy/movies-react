import { useEffect, useState } from "react";

interface CardProps {
  children: React.ReactNode;
}
const ContainerComponent: React.FC<CardProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return <div className={screenSize.width < 768 ? "w-100" : "w-75"}>{children}</div>;
};
export default ContainerComponent;
