import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className=" flex items-center justify-between text-sm sm:px-6 text-stone-300 px-4 py-4 bg-stone-800 uppercase md:text-lg">
      <p className="sm:space-x-6 space-x-4 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
