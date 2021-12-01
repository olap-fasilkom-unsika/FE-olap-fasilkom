import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components/admin";
import { useLocation } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import DataMahasiswa from "./pages/Mahasiswa/DataMahasiswa";
import DetailMahasiswa from "./pages/Mahasiswa/DetailMahasiswa";
import SeminarProposal from "./pages/JadwalKegiatan/SeminarProposal";
import ScrollToTop from "./ScrollToTop";

// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));

// const Error403 = React.lazy(() => import("./pages/Pages/Errors/403"));
// const Error404 = React.lazy(() => import("./pages/Pages/Errors/404"));
// const Error500 = React.lazy(() => import("./pages/Pages/Errors/500"));
// const Error503 = React.lazy(() => import("./pages/Pages/Errors/503"));

const history = React.lazy(() => import("./history"));

function App() {
  let location = useLocation().pathname;

  let locationSplit = location.split("/");
  let locationParent = locationSplit[1];
  let WithoutRouter = ["auth", "error", "utilities"];

  return (
    <div className="App">
      <>
        {!WithoutRouter.includes(locationParent) ? (
          <>
            <Header />
            <Sidebar />
          </>
        ) : (
          ""
        )}
        <React.Suspense fallback={<h1>Still Loading…</h1>}>
          <ScrollToTop />
          <Switch history={history}>
            <Route path="/" exact component={Dashboard} />
            <Route path="/mahasiswa" exact component={DataMahasiswa} />
            <Route path="/mahasiswa/detail" component={DetailMahasiswa} />
            <Route path="/seminar-proposal" exact component={SeminarProposal} />
          </Switch>
        </React.Suspense>
        <Footer />
      </>
    </div>
  );
}

export default App;
