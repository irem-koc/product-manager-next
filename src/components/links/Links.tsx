"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Links = (props: Props) => {
  const path = usePathname();

  return (
    <div className="flex gap-5 items-center">
      <Link
        className={`${
          path === "/signin" && "border-dashed border-black border-2"
        }  p-3 rounded-lg `}
        href={"/signin"}
      >
        Sign In
      </Link>

      <Link
        className={`${
          path === "/admin" && "border-dashed border-black border-2"
        } p-3 rounded-lg`}
        href={"/admin"}
      >
        Admin
      </Link>

      <Link
        className={`${
          path === "/cart" && "border-dashed border-black border-2"
        } p-3 rounded-lg`}
        href={"/cart"}
      >
        Cart
      </Link>
    </div>
  );
};

export default Links;
