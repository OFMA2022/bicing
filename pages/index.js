import NavBar from "../components/NavBar/NavBar.js";
import Blocks from "../components/Blocks.js";
import classnames from "classnames";
import Video from "../components/Video.js";

export default function Home() {
  const container = classnames(
    "w-full md:w-1/2 flex items-center justify-center"
  );

  return (
    <div className="max-w-[1400px] h-screen ml-auto mr-auto">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        {/* NAVBAR: ADDING LOGO, SEARCH BAR & SIGN UP */}
        <NavBar />
      </div>
      {/* THE 4 BLOCKS */}
      <div className="flex flex-wrap-reverse md:flex-nowrap md:min-h-[calc(100vh-216px)] gap-8 sm:gap-4 w-full px-4 md:px-12 md:py-6">
        <div className={container}>
          <Blocks />
        </div>
        {/* MP4 */}
        <div className="w-full">
          <Video ruta_video={require("../public/videos/bicing_video.mp4")} />
        </div>
      </div>
    </div>
  );
}
