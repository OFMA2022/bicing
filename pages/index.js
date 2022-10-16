import NavBar from "../components/NavBar/NavBar.js";

export default function Home() {
  return (
    <div className="max-w-[1400px] h-screen ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        {/* NAVBAR: ADDING LOGO, SEARCH BAR & SIGN UP */}
        <NavBar />
      </div>
    </div>
  );
}
