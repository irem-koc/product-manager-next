import Image from "next/image";
import Link from "next/link";
import Links from "../links/Links";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-around items-center bg-slate-200 z-auto shadow-lg p-4 w-full h-50">
      <div className="flex items-center gap-2">
        <Image
          alt="logo"
          src={"/logo.svg"}
          width={60}
          height={60}
          className="object-cover"
        />
        <Link href="/" className="font-title text-2xl">
          Product Manager App
        </Link>
      </div>
      <div className="w-1/3">
        <input
          className="w-full border p-3 rounded-md text-sm outline-none border-gray-200"
          type="text"
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        />
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
