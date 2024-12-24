import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const className = `sm:py-4 sm:px-6 disabled:cursor-not-allowed rounded-full focus:outline-none focus:ring focus:yellow-300 focus:ring-yellow-300 focus:ring-offset-2 hover:bg-yellow-300 transition-colors duration-300  tracking-wide py-3 px-4 bg-yellow-400 uppercase font-semibold text-stone-800`;

  const base =
    " disabled:cursor-not-allowed rounded-full focus:outline-none focus:ring focus:yellow-300 focus:ring-yellow-300 focus:ring-offset-2 hover:bg-yellow-300 transition-colors duration-300  tracking-wide  bg-yellow-400 uppercase font-semibold text-stone-800";

  const styles = {
    primary: base + " py-3 px-4 md:py-4 md:px-6",
    small: base + " text-xs py-1 px-2 md:px-5 md:py-2.5",
    secondary:
      "hover:text-stone-800 py-2.5 px-3.5 md:py-4 md:px-6 border-2 border-stone-300 disabled:cursor-not-allowed rounded-full focus:outline-none focus:ring focus:bg-stone-300 focus:ring-stone-300 focus:ring-offset-2 focus:text-stone-800 hover:bg-stone-300 transition-colors duration-300  tracking-wide uppercase font-semibold text-stone-800",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
