import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <header>
      <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>Home</a>
      </Link>{" "}
      <Link href="/about">
        <a className={pathname === "/about" ? "is-active" : ""}>About</a>
      </Link>
    </header>
  );
};

export default Header;
