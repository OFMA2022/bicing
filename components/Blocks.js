import Link from "next/link";
import classnames from "classnames";
import React from "react";

function Blocks() {
  const categoryClass = classnames(
    "w-40 h-40 sm:w-40 sm:h-40 text-white shadow-lg rounded-2xl flex flex-col items-center justify-center"
  );
  return (
    <div>
      <div className="parent">
        <div className="div1">
          <Link href="/">
            <a className={categoryClass + " blocks_one_color"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                fill="#ffffff"
              >
                <path d="M9.7 40q-4.05 0-6.875-2.85T0 30.25q0-4.05 2.85-6.875t6.9-2.825q3.55 0 6.225 2.275T19.2 28.6h2.55L17.65 17H14v-3h9.4v3h-2.6l1.3 3.55h11.1L29.65 11H24.4V8h4.95q1.2 0 2.025.55T32.6 10.2l3.8 10.35h1.9q4.05 0 6.875 2.8T48 30.15q0 4.05-2.825 6.95Q42.35 40 38.3 40q-3.6 0-6.3-2.4-2.7-2.4-3.3-6h-9.5q-.55 3.6-3.225 6T9.7 40Zm0-3q2.4 0 4.175-1.55t2.375-3.85H10.3v-3h5.95q-.6-2.25-2.4-3.65-1.8-1.4-4.1-1.4-2.8 0-4.775 1.95Q3 27.45 3 30.25t1.95 4.775Q6.9 37 9.7 37Zm15.25-8.4h3.8q.2-1.15.775-2.55t1.575-2.5h-7.95ZM38.3 37q2.8 0 4.75-1.975Q45 33.05 45 30.25q0-2.8-1.95-4.75-1.95-1.95-4.75-1.95h-.8l1.95 5.65-2.8.95-2.15-5.6q-1.45.85-2.175 2.4-.725 1.55-.725 3.3 0 2.8 1.95 4.775Q35.5 37 38.3 37ZM9.65 30.25Zm28.65 0Z" />
              </svg>
              <div>Bicicletas</div>
            </a>
          </Link>
        </div>
        <div className="div2">
          <Link href="../stations_list">
            <a className={categoryClass + " blocks_two_color"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                fill="#ffffff"
              >
                <path d="M4 42V6h19.5v8.25H44V42Zm3-3h5.25v-5.25H7Zm0-8.25h5.25V25.5H7Zm0-8.25h5.25v-5.25H7Zm0-8.25h5.25V9H7ZM15.25 39h5.25v-5.25h-5.25Zm0-8.25h5.25V25.5h-5.25Zm0-8.25h5.25v-5.25h-5.25Zm0-8.25h5.25V9h-5.25ZM23.5 39H41V17.25H23.5v5.25h4v3h-4v5.25h4v3h-4Zm9.25-13.5v-3h3v3Zm0 8.25v-3h3v3Z" />
              </svg>
              <div>Estaciones</div>
            </a>
          </Link>
        </div>
        <div className="div3">
          <Link href="/">
            <a className={categoryClass + " blocks_three_color"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                fill="#ffffff"
              >
                <path d="m30.6 42-13.15-4.65L8.5 40.9q-.85.45-1.675-.05Q6 40.35 6 39.35v-27.9q0-.65.375-1.15.375-.5.975-.75L17.45 6l13.15 4.6 8.9-3.55q.85-.4 1.675.075Q42 7.6 42 8.6v28.25q0 .55-.375.95-.375.4-.925.6Zm-1.7-3.75V13l-9.8-3.3v25.25Zm3 0L39 35.9V10.3L31.9 13ZM9 37.65l7.1-2.7V9.7L9 12.05ZM31.9 13v25.25ZM16.1 9.7v25.25Z" />
              </svg>
              <div>Mapa</div>
            </a>
          </Link>
        </div>
        <div className="div4">
          <Link href="/">
            <a className={categoryClass + " blocks_four_color"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                fill="#ffffff"
              >
                <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
              </svg>
              <div>Info</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Blocks;
