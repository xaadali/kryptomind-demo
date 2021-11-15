import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import "../styles/globals.css";
import { useEffect } from "react";
// import "../bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // typeof document !== undefined
    //   ? require("bootstrap/dist/js/bootstrap")
    //   : null;
  }, []);
  return <Component {...pageProps} />;
}
// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     import("jquery").then(($) => {
//       // jQuery must be installed to the `window`:
//       window.$ = window.jQuery = $;
//       return import("bootstrap");
//     });
//   }, []);

//   return <Component {...pageProps} />;
// }
export default MyApp;
