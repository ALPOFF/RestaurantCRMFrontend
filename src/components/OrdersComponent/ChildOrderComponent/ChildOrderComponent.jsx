import "./ChildOrderComponent.css";

const ChildOrderComponent = () => {
  return (
    <div className="child-order">
      <div>
        <div>Номер столика:</div>
        <div>Время бронирования:</div>
        <div>Предпочтения:</div>
      </div>
      <div className="child-buttons">
        <button>Редактировать</button>
        <button>Отмена</button>
      </div>
    </div>
  );
};

export default ChildOrderComponent;
