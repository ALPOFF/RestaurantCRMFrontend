import "./TablePosComponent.css";

const TablePosComponent = ({ tablePlanPhoto }) => {
  return (
    <div className="tables-pos">
      <div className="table-pos__title">Фотография ресторана</div>
      <div>
        <div className="tables-pos__pic">
          <img src={tablePlanPhoto} alt={tablePlanPhoto} height={220} />
        </div>
        <div className="table-pos__buttons">
          <button>Изменить</button>
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default TablePosComponent;
