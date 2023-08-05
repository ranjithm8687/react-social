import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [widowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleReSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleReSize);
    return () => window.removeEventListener("resize", handleReSize);
  });

  return widowSize;
};

export default useWindowSize;
