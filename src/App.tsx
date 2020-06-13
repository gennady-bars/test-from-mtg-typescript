import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
