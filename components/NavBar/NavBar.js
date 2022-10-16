import Link from "next/link";
import Search from "../Search.js";
import Button from "../Button.js";

function NavBar() {
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

        {/* SIGN UP */}
        <div>
          <Link href="/">
            <Button variant="tertiary" type="submit">
              Login up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
