import "./MainInfoComponent.css";
import { useEffect, useState } from "react";
import { mainAPI } from "../../../common/api/api";

const MainInfoComponent = () => {
  const [restInfo, setRestInfo] = useState([]);
  useEffect(() => {
    mainAPI.getRestaurantInfo().then((data) => {
      console.log(data);
      setRestInfo(data);
    });
  }, []);
  return (
    <div className="main-info">
      Общая информация
      {restInfo[0] !== undefined && (
        <div className="main-info-container">
          <div>Название: {restInfo[0].title}</div>
          <div>
            Адрес:{" "}
            {`${restInfo[0].address.city} ${restInfo[0].address.street} ${restInfo[0].address.building}`}
          </div>
          <div>
            Общая информация {restInfo[0].information}
            <div></div>
          </div>
          <div>
            <button>Редактировать</button>
            <button>Сохранить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainInfoComponent;
