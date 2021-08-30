import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const LazyComponent = lazy(() => import("./Lazy"));

ReactDOM.render(
  <Suspense fallback={null}>
    <LazyComponent />
  </Suspense>,
  document.getElementById("root")
);
