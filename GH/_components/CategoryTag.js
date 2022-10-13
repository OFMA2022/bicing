/* eslint-disable jsx-a11y/alt-text */
import classnames from "classnames";

const CategoryTag = ({ children }) => {
  const classesTag = classnames({
    "inline-flex bg-secondary text-white items-center justify-center text-xs border border-transparent font-normal rounded-full min-w-100 px-2 py-1 focus:outline-none focus:border-accent-blue focus:shadow-outline-indigo transition ease-in-out duration-150": true,
  });

  return <div className={classesTag}>{children}</div>;
};

export default CategoryTag;
