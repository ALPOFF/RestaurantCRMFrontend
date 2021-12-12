import "./App.css";
import MainComponent from "./components/MainComponent/MainComponent";
import { Route } from "react-router-dom";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import OrdersComponent from "./components/OrdersComponent/OrdersComponent";

const App = () => {
  return (
    <>
      <div className="main-container">
        <Route path="/" render={() => <MainComponent />} />
        <Route path="/profile" render={() => <ProfileComponent />} />
        <Route path="/orders" render={() => <OrdersComponent />} />
      </div>
      <Route path="/auth" render={() => <AuthComponent />} />
    </>
  );
};

export default App;
