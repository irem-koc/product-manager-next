import Image from "next/image";
import Link from "next/link";
import Links from "../links/Links";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center bg-slate-200 z-auto shadow-lg p-4 w-full h-50">
      <div className="flex items-center gap-2">
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={60}
          height={60}
          className="object-cover"
        />
        <Link href="/" className="font-title text-4xl">
          Product Manager App
        </Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
