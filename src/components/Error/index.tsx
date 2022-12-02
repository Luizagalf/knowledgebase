import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <div>
        <h2 className="error_title">We are sorry, Page not found!</h2>
        <p className="error_text">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default Error;
