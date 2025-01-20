import React from "react";

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="error_wrap">
        <p>
          Sorry,we couldn't load your questions. Please check your internet
          connections.
        </p>

        <a href="/">
          <button className="btn">Refresh Page</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
