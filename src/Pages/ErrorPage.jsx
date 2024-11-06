import { Link } from "react-router-dom";

const ErrorPage = () => {
  // useEffect(() => {
  //   document.title = "Error Page";
  // }, []);
    return (
      <>
        <div className="text-center flex flex-col justify-center items-center h-screen">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="text-blue hover:underline">
            Go back to Home
          </Link>
        </div>
      </>
    );
};

export default ErrorPage;