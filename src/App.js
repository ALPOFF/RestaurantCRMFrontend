import "./App.css";
import MainComponent from "./components/MainComponent/MainComponent";
import { Route } from "react-router-dom";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import OrdersComponent from "./components/OrdersComponent/OrdersComponent";

const App = () => {
  return (
    <>
      <Route path="/auth" render={() => <AuthComponent />} />
      <div className="main-container">
        <Route path="/" render={() => <MainComponent />} />
        <Route path="/profile" render={() => <ProfileComponent />} />
        <Route path="/orders" render={() => <OrdersComponent />} />
      </div>
    </>
  );
};

export default App;
