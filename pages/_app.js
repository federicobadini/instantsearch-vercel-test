import "../styles/globals.css";
import "instantsearch.css/themes/satellite-min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

export const config = {
  unstable_includeFiles: ["node_modules/react-dom"],
};
