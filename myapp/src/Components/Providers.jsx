import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default Providers;
