import { ToastContainer, toast as defaultToast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const ToastProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (mounted) {
    const root = document?.getElementById("toast-portal");
    return createPortal(
      <>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          transition={Slide}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </>,
      root
    );
  } else {
    null;
  }
};
export const toast = defaultToast;
export default ToastProvider;
