import "./TablePosComponent.css";

const TablePosComponent = ({ tablePlanPhoto }) => {
  return (
    <div className="tables-pos">
      <div>План расстановки столов</div>
      <div>
        <img src={tablePlanPhoto} alt={tablePlanPhoto} />
      </div>
      <div>
        <button>Изменить</button>
        <button>Сохранить</button>
      </div>
    </div>
  );
};

export default TablePosComponent;
