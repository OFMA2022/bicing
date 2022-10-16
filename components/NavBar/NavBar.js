import Link from "next/link";
import Search from "../Search.js";
import Button from "../Button.js";
import NavBarMenuHamburger from "./NavBarMenuHamburger.js";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex justify-between items-center p-4 md:px-12 md:py-6">
      {/* LOGO */}
      <div className="font-satisfy text-logo px-1 logo font-bold">
        <Link href="/">
          <a>Bicing</a>
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div className="flex gap-8 justify-items-end items-center">
        <div>
          <Search />
        </div>

        <div className="flex gap-4 justify-items-end items-center">
          {/* LOGIN UP */}
          <div className="hidden sm:inline-flex">
            <Link href="/">
              <a>
                <Button variant="tertiary">Iniciar sesión</Button>
              </a>
            </Link>
          </div>

          {/* SIGN UP */}
          <div className="hidden">
            <Link href="/">
              <a>
                <Button variant="quaternary">Date de alta</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
