import { NavLink, Redirect } from "react-router-dom";
import "./MainComponent.css";

const MainComponent = () => {
  if (localStorage.getItem("isAuth") == null) return <Redirect to={"/auth/"} />;

  return (
    <div className="nav">
      <div className="nav-item">
        <NavLink to="/profile">
          <span>Profile</span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/orders">
          <span>Orders</span>
        </NavLink>
      </div>
    </div>
  );
};

export default MainComponent;
