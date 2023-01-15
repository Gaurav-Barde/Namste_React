// // const heading = document.createElement('h1');
// // heading.innerHTML = 'Hello World!';
// // heading.style.color= 'green';
// // const root = document.getElementById('root');
// // root.appendChild(heading);
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { style: { color: "dodgerblue" }, key: "h1" },
  "Namste JavaScripts"
);

const heading2 = React.createElement(
  "h2",
  { style: { color: "tan" }, key: "h2" },
  "Namste Reacts"
);

console.log(heading2, "React");

const wrapper = React.createElement(
  "div",
  { style: { fontFamily: "sans-serif" } },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(wrapper);
