import classnames from "classnames";

const Button = ({
  children,
  variant = "primary",
  type,
  onClick,
  size = "normal",
  isFullWidth,
  loading,
  disabled,
  ariaLabel,
  hasLink,
  mapCard,
}) => {
  const classesButton = classnames({
    "inline-flex items-center rounded-md focus:outline-none focus:border-accent-blue focus:shadow-outline-indigo transition ease-in-out duration-150": true,
    "text-white bg-primary border border-transparent hover:bg-primary-dark font-normal":
      variant === "primary",
    "text-white bg-secondary border border-transparent hover:bg-secondary-dark font-normal":
      variant === "secondary",
    "bg-white font-normal border border-gray-200 hover:border-gray-300 hover:bg-gray-100":
      variant === "empty",
    "text-white bg-[#df1515] border border-red-500 hover:bg-white hover:text-[#df1515] font-normal":
      variant === "tertiary",

    "text-[#df1515] bg-white border border-red-500 hover:bg-[#df1515] hover:text-white font-normal":
      variant === "quaternary",

    "px-2 md:px-6 py-2 text-lg leading-6": size === "normal" && !hasLink,
    "px-2 md:px-4 py-1 text-sm leading-6": size === "small" && !hasLink,
    "[&>a]:p-2 [&>a]:md:px-6 text-lg leading-6": hasLink,
    "[&>a]:md:px-1 text-base ": mapCard,
    "w-full": isFullWidth,
    "opacity-50 cursor-not-allowed": disabled,
  });

  return (
    <button
      aria-label={ariaLabel || "action button"}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      className={classesButton}
    >
      {children}
    </button>
  );
};

export default Button;
