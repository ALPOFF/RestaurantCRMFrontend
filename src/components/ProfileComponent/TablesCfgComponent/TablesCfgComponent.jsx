import RestPicComponent from "./RestPicComponent/RestPicComponent";
import TablePosComponent from "./TablePosComponent/TablePosComponent";
import "./TablesCfgComponent.css";
import { useEffect, useState } from "react";
import { mainAPI } from "../../../common/api/api";

const TablesCfgComponent = () => {
  const [tablesCfg, setTablesCfg] = useState({});
  const [restPic, setRestPic] = useState("");
  useEffect(() => {
    mainAPI.getTablesConf().then((data) => {
      console.log(data);
      setTablesCfg(data);
    });

    mainAPI.getRestaurantInfo().then((data) => {
      console.log(data);
      setRestPic(data.restaurant_photo);
    });
  }, []);
  return (
    <div className="tables-cfg">
      {restPic == "" && (
        <div style={{ position: "absolute" }}>
          <img
            src="https://c.tenor.com/8KWBGNcD-zAAAAAC/loader.gif"
            alt=""
            srcset=""
          />
        </div>
      )}
      <div className="tables-cfg-title">Конфигурирование столиков</div>
      <div className="tables-cfg-container">
        <TablePosComponent tablePlanPhoto={tablesCfg.tables_plan_photo} />
        <RestPicComponent restaurantPhoto={restPic} />
      </div>
    </div>
  );
};

export default TablesCfgComponent;
