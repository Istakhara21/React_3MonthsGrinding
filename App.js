import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 id="title"> Food Villa</h1>;
};

const HeaderComp = () => {
  return (
    <div>
      <Title />
      <h1>Hello JSX</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComp />);
