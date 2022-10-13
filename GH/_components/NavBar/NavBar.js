import { useState } from "react";
import Link from "next/link";
import NavBarList from "../NavBar/NavBarList";
import NavBarMenuHamburger from "../NavBar/NavBarMenuHamburger";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center p-4 md:px-12 md:py-6">
      <div className="font-satisfy text-logo px-1 logo font-bold">
        <Link href="/">
          <a>Good Hands</a>
        </Link>
      </div>
      <div className="flex gap-8 items-center">
        <NavBarList open={open} />
      </div>

      <div className="sm:hidden text-black">
        <NavBarMenuHamburger open={open} handleClick={handleClick} />
      </div>
    </nav>
  );
}
export default NavBar;
