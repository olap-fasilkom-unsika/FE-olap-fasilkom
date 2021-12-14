import React from "react";
import DisappearedLoading from "react-loadingg/lib/DisappearedLoading";

const LoadingComponent = () => {
  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="page-error">
            <div className="page-inner">
              <DisappearedLoading color="#6777f0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingComponent;
