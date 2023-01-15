// // const heading = document.createElement('h1');
// // heading.innerHTML = 'Hello World!';
// // heading.style.color= 'green';
// // const root = document.getElementById('root');
// // root.appendChild(heading);
import React from "react";
import ReactDOM from "react-dom/client";

const Wrapper = () => {
  return (
    <div>
      <h1>Heading 1</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Wrapper />);
