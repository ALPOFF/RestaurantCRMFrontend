import "./ChildOrderComponent.css";

const ChildOrderComponent = ({ tableNumber, timestamp }) => {
  function ParseData(timestamp) {
    let date = new Date();
    date.setTime(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return (
      day +
      "." +
      month +
      "." +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  }

  return (
    <div className="child-order">
      <div>
        <div>Номер столика: {tableNumber}</div>
        <div>Время бронирования: {ParseData(timestamp)}</div>
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
