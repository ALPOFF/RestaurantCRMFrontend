import "./MainInfoComponent.css";
import { useEffect, useState } from "react";
import { mainAPI } from "../../../common/api/api";

const MainInfoComponent = () => {
  const [restInfo, setRestInfo] = useState({});

  useEffect(() => {
    mainAPI.getRestaurantInfo().then((data) => {
      console.log("df", data);
      setRestInfo(data);
    });
  }, []);
  return (
    <div className="main-info">
      Общая информация
      {restInfo.title != undefined && (
        <div className="main-info-container">
          <div>Название: {restInfo.title}</div>
          <div>
            Адрес:{" "}
            {`${restInfo.address.city} ${restInfo.address.street} ${restInfo.address.building}`}
          </div>
          <div>
            Общая информация {restInfo.information}
            <div></div>
          </div>
          <div className="main-info__buttons">
            <button>Редактировать</button>
            <button>Сохранить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInfoComponent;
