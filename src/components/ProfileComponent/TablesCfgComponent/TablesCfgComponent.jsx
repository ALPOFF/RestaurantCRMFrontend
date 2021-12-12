import RestPicComponent from "./RestPicComponent/RestPicComponent";
import TablePosComponent from "./TablePosComponent/TablePosComponent";
import "./TablesCfgComponent.css";
import { useEffect, useState } from "react";
import { mainAPI } from "../../../common/api/api";

const TablesCfgComponent = () => {
  const [tablesCfg, setTablesCfg] = useState({});
  useEffect(() => {
    mainAPI.getTablesConf().then((data) => {
      console.log(data);
      setTablesCfg(data);
    });
  }, []);
  return (
    <div className="tables-cfg">
      Конфигурирование столиков
      <div className="tables-cfg-container">
        <TablePosComponent tablePlanPhoto={tablesCfg.table_plan_photo} />
        <RestPicComponent restaurantPhoto={tablesCfg.restaurant_photo} />
      </div>
    </div>
  );
};

export default TablesCfgComponent;
