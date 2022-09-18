import { Provider } from "react-redux";
import ToastProvider from "../components/ToastProvider";
import { wrapper } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default wrapper.withRedux(MyApp);
