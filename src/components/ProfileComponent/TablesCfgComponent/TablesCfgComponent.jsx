import RestPicComponent from "./RestPicComponent/RestPicComponent";
import TablePosComponent from "./TablePosComponent/TablePosComponent";
import "./TablesCfgComponent.css";
import { useEffect, useState } from "react";
import { mainAPI } from "../../../common/api/api";
import { connect } from "react-redux";
import { setLoading } from "./../../../state/main-reducer";

const TablesCfgComponent = (props) => {
  const [tablesCfg, setTablesCfg] = useState({});
  const [restPic, setRestPic] = useState("");
  useEffect(() => {
    props.setLoading(true);
    mainAPI.getTablesConf().then((data) => {
      console.log(data);
      setTablesCfg(data);
    });

    mainAPI.getRestaurantInfo().then((data) => {
      console.log(data);
      setRestPic(data.restaurant_photo);
      props.setLoading(false);
    });
  }, []);
  return (
    <div className="tables-cfg">
      <div className="tables-cfg-title">Конфигурирование столиков</div>
      <div className="tables-cfg-container">
        <TablePosComponent tablePlanPhoto={tablesCfg.tables_plan_photo} />
        <RestPicComponent restaurantPhoto={restPic} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.mainReducer.loading,
});

export default connect(mapStateToProps, { setLoading })(TablesCfgComponent);
