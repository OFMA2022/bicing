import Link from "next/link";
import classnames from "classnames";
import React from "react";

function Blocks() {
  const categoryClass = classnames(
    "hover:bg-red-800 w-40 h-40 sm:w-40 sm:h-40 text-white shadow-lg rounded-2xl flex flex-col items-center justify-center"
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
              <div>Datos Bicing</div>
            </a>
          </Link>
        </div>
        <div className="div2">
          <Link href="/">
            <a className={categoryClass + " blocks_two_color"}>
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
        <div className="div3">
          <Link href="/">
            <a className={categoryClass + " blocks_three_color"}>
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
        <div className="div4">
          <Link href="/">
            <a className={categoryClass + " blocks_four_color"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                fill="#ffffff"
              >
                <path d="M30.95 10.3q-1.5 0-2.575-1.075Q27.3 8.15 27.3 6.65q0-1.5 1.075-2.575Q29.45 3 30.95 3q1.5 0 2.575 1.075Q34.6 5.15 34.6 6.65q0 1.5-1.075 2.575Q32.45 10.3 30.95 10.3ZM21.1 20.6l4.45 4.75V37.7h-3v-10l-6.8-5.95q-.45-.4-.75-1.075-.3-.675-.3-1.375t.325-1.35q.325-.65.725-1.05l5.95-5.95q.4-.4 1.125-.725.725-.325 1.525-.325.8 0 1.525.325.725.325 1.125.725l3.9 3.9q1.35 1.35 3.225 2.325 1.875.975 4.225.975v3q-3 0-5.4-1.125-2.4-1.125-4.3-3.025l-2-2ZM10 24.5q4.15 0 6.95 2.8t2.8 6.95q0 4.15-2.8 6.95T10 44q-4.15 0-6.95-2.8t-2.8-6.95q0-4.15 2.8-6.95T10 24.5Zm0 17.05q3.1 0 5.2-2.1t2.1-5.2q0-3.1-2.1-5.2t-5.2-2.1q-3.1 0-5.2 2.1t-2.1 5.2q0 3.1 2.1 5.2t5.2 2.1ZM38 24.5q4.15 0 6.95 2.8t2.8 6.95q0 4.15-2.8 6.95T38 44q-4.15 0-6.95-2.8t-2.8-6.95q0-4.15 2.8-6.95T38 24.5Zm0 17.05q3.1 0 5.2-2.1t2.1-5.2q0-3.1-2.1-5.2t-5.2-2.1q-3.1 0-5.2 2.1t-2.1 5.2q0 3.1 2.1 5.2t5.2 2.1Z" />
              </svg>
              <div>Bicicletas</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Blocks;
