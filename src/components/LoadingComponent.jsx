import React from "react";
import ReactLoading from "react-loading";
import Error404 from "../pages/Errors/404";
import DisappearedLoading from "react-loadingg/lib/DisappearedLoading";

const LoadingComponent = () => {
  return (
    <div id="app">
      <section class="section">
        <div class="container mt-5">
          <div class="page-error">
            <div class="page-inner">
              <DisappearedLoading color='#6777f0'  />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingComponent;
