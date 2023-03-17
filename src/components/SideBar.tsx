import { useState, useEffect } from "react";

export default function SideBar() {
  let fix;
  if (typeof window !== "undefined") {
    fix = window.innerWidth;
  }

  const [windowWidth, setWindowWidth] = useState(fix);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  if ((windowWidth ?? 767) > 768) {
    return (
      <>
        <div className="border border-black mx-4 p-4 text-xl">
          <div className="py-12 px-4 text-center">Menu 1</div>
          <div className="py-12 px-4 text-center">Menu 2</div>
          <div className="py-12 px-4 text-center">Menu 3</div>
        </div>
      </>
    );
  }
  return <></>;
}