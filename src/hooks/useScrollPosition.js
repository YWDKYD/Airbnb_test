import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  // 定义实体滚动函数
  useEffect(() => {
    const handleScroll = throttle(function () {
      setScrollX(window.screenX);
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return [scrollX, scrollY];
}
