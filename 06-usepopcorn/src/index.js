import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import "./index.css";
import App from "./App";
import AppChallenge from "./AppChallenge";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppChallenge />
    {/* <App /> */}
    {/* <Test />
    <StarRating maxRating={5} />
    <StarRating
      size={24}
      color="red"
      messages={["Terrible", "Good", "Okay", "Very Good", "Excellent"]}
      defaultValue={4}
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
