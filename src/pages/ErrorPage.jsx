import Navbar from "../components/Navbar.jsx";

const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <div className="error text-center">
        <h1>404</h1>
        <p className="text-center">Page not found</p>
      </div>
    </>
  );
};

export default ErrorPage;
