import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "./store";
import Home from "./components/Home";

function App(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Provider store={store}>
      <Routes location={location} navigate={navigate}>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
