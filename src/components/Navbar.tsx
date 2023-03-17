import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
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

  const [click, setClick] = useState(false);
  const HamClicked = () => {
    setClick(!click);
  };

  if ((windowWidth ?? 769) > 768) {
    return (
      <>
        <nav>
          <div className="flex items-center text-xl font-bold gap-4">
            <Image src="logo.svg" width={80} height={80} alt="logo" />
            <div className="">Coinwatch</div>
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav>
        <div className="flex items-center text-xl font-bold gap-4">
          <Image src="logo.svg" width={80} height={80} alt="logo" />
          <div className="flex justify-between w-full">
            <div>Coinwatch</div>
            <div>
              <GiHamburgerMenu size={30} onClick={HamClicked} />
              {click && (
                <>
                  <SideBarMob />
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
const SideBarMob = () => {
  return (
    <>
      <div className="border border-black bg-white rounded-2xl p-6 absolute right-1 top-20">
        <div className="p-4">Menu 1</div>
        <div className="p-4">Menu 2</div>
        <div className="p-4">Menu 3</div>
      </div>
    </>
  );
};
