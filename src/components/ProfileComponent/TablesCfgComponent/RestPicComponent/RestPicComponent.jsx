import "./RestPicComponent.css";

const RestPicComponent = ({ restaurantPhoto }) => {
  return (
    <div className="rest-pic">
      <div className="rest-pic__title">Фотография ресторана</div>
      <div>
        <div className="rest-pic__pic">
          <img src={restaurantPhoto} alt={restaurantPhoto} height={200} />
        </div>
        <div className="rest-pic__buttons">
          <button>Изменить</button>
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default RestPicComponent;
