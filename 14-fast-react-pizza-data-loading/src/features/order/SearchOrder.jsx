import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72 transition-all duration-300  bg-yellow-100 placeholder:text-stone-400 text-sm rounded-full px-4 py-2 w-28 sm:w-64"
        placeholder="Search order #"
        value={query}
        onChange={(e) => {
          console.log(e.target.value);
          return setQuery(e.target.value);
        }}
      ></input>
    </form>
  );
}

export default SearchOrder;
