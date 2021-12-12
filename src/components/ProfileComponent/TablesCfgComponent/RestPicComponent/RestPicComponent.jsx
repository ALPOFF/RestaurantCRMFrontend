import "./RestPicComponent.css";

const RestPicComponent = ({ restaurantPhoto }) => {
  return (
    <div className="rest-pic">
      <div>Фотография ресторана</div>
      <div>
        <img src={restaurantPhoto} alt={restaurantPhoto} />
      </div>
      <div>
        <button>Изменить</button>
        <button>Сохранить</button>
      </div>
    </div>
  );
};

export default RestPicComponent;
