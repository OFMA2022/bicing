import classnames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../components/Button";

function CategoriesBlock() {
  const categoryClass = classnames(
    "w-36 h-36 sm:w-40 sm:h-40 text-white shadow-lg rounded-2xl flex flex-col items-center justify-center"
  );
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center">
      <div className=" grid grid-cols-2 gap-4 sm:gap-6 ">
        <motion.div
          whileHover={{ scale: [null, 1.2, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/category/ropa">
            <a className={categoryClass + " category3"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#ffffff"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <path d="M21.6,18.2L13,11.75v-0.91c1.65-0.49,2.8-2.17,2.43-4.05c-0.26-1.31-1.3-2.4-2.61-2.7C10.54,3.57,8.5,5.3,8.5,7.5h2 C10.5,6.67,11.17,6,12,6s1.5,0.67,1.5,1.5c0,0.84-0.69,1.52-1.53,1.5C11.43,8.99,11,9.45,11,9.99v1.76L2.4,18.2 C1.63,18.78,2.04,20,3,20h9h9C21.96,20,22.37,18.78,21.6,18.2z M6,18l6-4.5l6,4.5H6z" />
                </g>
              </svg>
              <div>Ropa</div>
            </a>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.2, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/category/muebles">
            <a className={categoryClass + " category"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#ffffff"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path d="M20,8V6c0-1.65-1.35-3-3-3H7C5.35,3,4,4.35,4,6v2c-1.65,0-3,1.35-3,3v5c0,1.65,1.35,3,3,3v1c0,0.55,0.45,1,1,1 c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1c1.65,0,3-1.35,3-3v-5C23,9.35,21.65,8,20,8z M6,6 c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1v2.78c-0.61,0.55-1,1.34-1,2.22v2H7v-2c0-0.88-0.39-1.67-1-2.22V6z M21,16 c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v4h14v-4c0-0.55,0.45-1,1-1s1,0.45,1,1V16z" />
                </g>
              </svg>
              <div>Muebles</div>
            </a>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.2, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/category/alimentos">
            <a className={categoryClass + " category2"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#ffffff"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M19.66,14c-0.66,1.92-2.24,3.54-4.4,4.39L14,18.89V20h-4v-1.11l-1.27-0.5c-2.16-0.85-3.74-2.47-4.4-4.39H19.66 M22,2 L4,3.99V12H2c0,3.69,2.47,6.86,6,8.25V22h8v-1.75c3.53-1.39,6-4.56,6-8.25H10.5V8H22V6.5H10.5V4.78L22,3.51V2L22,2z M8,6.5V5.06 l1-0.11V6.5H8L8,6.5z M5.5,6.5V5.34l1-0.11V6.5H5.5L5.5,6.5z M8,12V8h1v4H8L8,12z M5.5,12V8h1v4H5.5L5.5,12z" />
                </g>
              </svg>
              <div>Alimentos</div>
            </a>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.2, 1.2] }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/category/juguetes">
            <a className={categoryClass + " category1"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="#ffffff"
              >
                <g display="none">
                  <rect
                    display="inline"
                    fill="none"
                    height="24"
                    width="24"
                    y="0"
                  />
                </g>
                <g>
                  <g>
                    <path d="M18.75,10.08L17.4,6.05C17,4.82,15.85,4,14.56,4H9.44C8.15,4,7,4.82,6.6,6.05L5.81,8.4L4.41,7l0.29-0.29 c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0l-2,2c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0L3,8.41 l1.79,1.79C3.18,10.72,2,12.22,2,14c0,1.49,0.83,2.78,2.05,3.47C4.27,18.9,5.51,20,7,20c1.3,0,2.4-0.84,2.82-2h4.37 c0.41,1.16,1.51,2,2.82,2c1.49,0,2.73-1.1,2.95-2.53C21.17,16.78,22,15.49,22,14C22,12.05,20.6,10.43,18.75,10.08z M13,6h1.56 c0.43,0,0.81,0.27,0.95,0.68L16.61,10H13V6z M8.49,6.68C8.63,6.27,9.01,6,9.44,6H11v4H7.41L7.39,9.98L8.49,6.68z M7,18 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S7.55,18,7,18z M17,18c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S17.55,18,17,18z M19.49,15.32C18.95,14.53,18.03,14,17,14c-1.3,0-2.4,0.84-2.82,2H9.82C9.4,14.84,8.3,14,7,14c-1.03,0-1.95,0.53-2.49,1.32 C4.2,14.97,4,14.51,4,14c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2C20,14.51,19.8,14.97,19.49,15.32z" />
                  </g>
                </g>
              </svg>
              <div>Juguetes</div>
            </a>
          </Link>
        </motion.div>
      </div>
      <div className="flex flex-col sm:hidden items-center gap-4">
        <div className="font-bold uppercase">
          Ver localización de todas las instituciones
        </div>
        <Button variant="secondary" hasLink>
          <Link href="/institutionsMap">
            <a>Mapa</a>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default CategoriesBlock;
