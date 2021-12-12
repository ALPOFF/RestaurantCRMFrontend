import DishesListComponent from "./DishesListComponent/DishesListComponent";
import MainInfoComponent from "./MainInfoComponent/MainInfoComponent";
import TablesCfgComponent from "./TablesCfgComponent/TablesCfgComponent";
import { Redirect } from "react-router-dom";
import "./ProfileContainer.css";

const ProfileComponent = () => {
  if (localStorage.getItem("isAuth") == null) return <Redirect to={"/auth/"} />;

  return (
    <div className="profile-container">
      <div className="profile-container-top">
        <MainInfoComponent />
        <DishesListComponent />
      </div>
      <TablesCfgComponent />
    </div>
  );
};

export default ProfileComponent;
