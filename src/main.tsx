import { createRoot } from 'react-dom/client'

import App from "./components/App";

import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";




// const root = document.getElementById("root");


// if (root !== null) {
//   createRoot(root).render(<App />);
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);