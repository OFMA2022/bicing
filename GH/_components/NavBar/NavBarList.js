import classnames from "classnames";

const CATEGORIES = [
  {
    title: "Ropa",
    href: "/category/ropa",
  },
  {
    title: "Juguetes",
    href: "/category/juguetes",
  },
  {
    title: "Alimentos",
    href: "/category/alimentos",
  },
  {
    title: "Muebles",
    href: "/category/muebles",
  },
];

const links = CATEGORIES.map((category) => (
  <button key={category.title}>
    <a
      href={category.href}
      className="link link-underline link-underline-black text-black"
    >
      {category.title}
    </a>
  </button>
));

function NavBarList({ open }) {
  const navClass = classnames(
    `z-20 bg-white sm:hidden fixed top-[92px] w-full h-[calc(100vh-92px)] transition-[right] duration-300 ease-linear
  `,
    {
      "right-0": open,
      "right-[-100%]": !open,
    }
  );

  return (
    <div>
      <div className="hidden sm:flex sm:gap-8">{links}</div>
      <nav className={navClass}>
        <div className="flex flex-col gap-8 items-center text-2xl">{links}</div>
      </nav>
    </div>
  );
}
export default NavBarList;
