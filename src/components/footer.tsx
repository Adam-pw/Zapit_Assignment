import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="my-2">
        <hr/>
        <div className="flex justify-between items-center px-8 py-4 flex-col md:flex-row gap-10">
          <div className="">
            <Image src="logo.svg" width={80} height={80} alt="logo" />
          </div>
          <div className="flex gap-3">
            <CiLinkedin size={30} />
            <CiFacebook size={30} />
            <CiTwitter size={30} />
          </div>
        </div>
      </footer>
    </>
  );
}
