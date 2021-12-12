import { Redirect, withRouter } from "react-router-dom";
import "./AuthComponent.css";

const AuthComponent = (props) => {
  const auth = () => {
    localStorage.setItem("isAuth", true);
    props.history.push("/");
  };

  if (localStorage.getItem("isAuth")) return <Redirect to={"/"} />;

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-item">
          <span>Логин</span>
          <input type="text" />
        </div>
        <div className="login-item">
          <span>Пароль</span>
          <input type="text" />
        </div>
      </div>
      <button onClick={auth}>Войти</button>
    </div>
  );
};

export default withRouter(AuthComponent);
