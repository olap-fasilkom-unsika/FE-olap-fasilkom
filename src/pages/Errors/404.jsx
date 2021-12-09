import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Error404 extends Component {
  render() {
    return (
      <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="page-error">
              <div class="page-inner">
                <h1>404</h1>
                <div class="page-description">
                  The page you were looking for could not be found.
                </div>
                <div class="page-search">
                  
                  <div class="mt-3">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="simple-footer mt-5">Copyright &copy; Stisla 2018</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Error404;
