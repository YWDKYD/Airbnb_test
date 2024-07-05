import React, { Suspense, memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "./components/app-header";
import Footer from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";

export default memo(() => {
  useScrollTop();
  return (
    <div className="app">
      <Header />
      <Suspense fallback="loading">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  );
});
