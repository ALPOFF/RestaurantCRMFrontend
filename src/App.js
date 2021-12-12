import "./App.css";
import MainComponent from "./components/MainComponent/MainComponent";
import { Route } from "react-router-dom";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import OrdersComponent from "./components/OrdersComponent/OrdersComponent";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <>
      {props.loading && (
        <div
          style={{ position: "absolute", zIndex: 1, top: "35%", left: "47%" }}
        >
          <img
            src="https://i1.wp.com/css-tricks.com/wp-content/uploads/2021/08/s_2A9C470D38F43091CCD122E63014ED4503CAA7508FAF0C6806AE473C2B94B83E_1627522653545_loadinfo.gif?resize=200%2C200&ssl=1"
            alt=""
            srcset=""
          />
        </div>
      )}

      <Route path="/auth" render={() => <AuthComponent />} />
      <div className="main-container">
        <Route path="/" render={() => <MainComponent />} />
        <Route path="/profile" render={() => <ProfileComponent />} />
        <Route path="/orders" render={() => <OrdersComponent />} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.mainReducer.loading,
});

export default connect(mapStateToProps, {})(App);
