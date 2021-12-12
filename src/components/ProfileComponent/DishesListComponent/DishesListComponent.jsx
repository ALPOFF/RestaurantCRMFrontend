import { useEffect, useState } from "react";
import { mainAPI } from "../../../common/api/api";
import DishesListItemComponent from "../DishesListItemComponent/DishesListItemComponent";
import "./DishesListComponent.css";

const DishesListComponent = () => {
  const [dishesList, setDishesList] = useState([]);
  useEffect(() => {
    mainAPI.getDishesList().then((data) => {
      console.log(data);
      setDishesList(data);
    });
  }, []);
  return (
    <div className="dishes">
      Список блюд
      <div className="dishes-container">
        {dishesList.map((el) => (
          <DishesListItemComponent el={el} />
        ))}
        <div className="dishes-button">
          <button>Добавить</button>
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default DishesListComponent;
